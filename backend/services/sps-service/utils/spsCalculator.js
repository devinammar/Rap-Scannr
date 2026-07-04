// setelah improvement:
// Setiap 1 detik, hitung syllable dalam window 3 detik ke depan. 
// Jadi setiap titik waktu punya nilai SPS yang lebih granular dan peak yang sesungguhnya bisa ketangkep

const calculateAverageSPS = (segments, totalSyllables) => {
  if (!segments || segments.length === 0) return 0;
  const startTime = segments[0].start / 1000;
  const endTime = segments[segments.length - 1].end / 1000;
  const duration = endTime - startTime;
  return duration > 0 ? Number((totalSyllables / duration).toFixed(2)) : 0;
};

const generateSPSTimeline = (words, windowSize = 3) => {
  if (!words || words.length === 0) return [];

  const result = [];
  const step = 1; // setiap 1 detik

  const startTime = words[0].start / 1000;
  const endTime = words[words.length - 1].end / 1000;

  for (let t = startTime; t <= endTime; t += step) {
    const windowStart = t * 1000;
    const windowEnd = (t + windowSize) * 1000;

    let syllableCount = 0;
    for (const word of words) {
      if (word.start >= windowStart && word.start < windowEnd) {
        syllableCount += word.syllables || 1;
      }
    }

    const sps = syllableCount / windowSize;
    result.push({
      time: Number(t.toFixed(3)),
      sps: Number(sps.toFixed(2)),
    });
  }

  return result;
};

const calculatePeakSPS = (spsTimeline) => {
  let peakSPS = 0;
  let peakTime = 0;
  for (const point of spsTimeline) {
    if (point.sps > peakSPS) {
      peakSPS = point.sps;
      peakTime = point.time;
    }
  }
  return { peakSPS, peakTime };
};

const calculateSPSRolling = (timestamps, windowSize = 3) => {
  if (!timestamps || timestamps.length === 0) return [];
  const result = [];
  for (let i = 0; i < timestamps.length; i++) {
    const current = timestamps[i];
    const windowStart = current.start;
    const windowEnd = current.start + windowSize;
    let syllableCount = 0;
    for (const item of timestamps) {
      if (item.start >= windowStart && item.start < windowEnd) {
        syllableCount += item.syllables || 1;
      }
    }
    const sps = windowSize > 0 ? syllableCount / windowSize : 0;
    result.push({ time: current.start, sps: Number(sps.toFixed(2)) });
  }
  return result;
};

module.exports = {
  calculateAverageSPS,
  calculatePeakSPS,
  generateSPSTimeline,
  calculateSPSRolling,
};

// __________________________________________________

// sebelum improvement:
// Whisper bagi audio jadi segment ~5-10 detik. SPS dihitung per segment, 
// Kalau dalam 1 segment ada bagian cepet dan lambat, semua di-average jadi 1 angka. 
// Peak yang terjadi dalam 3 detik bisa hilang karena ke-dilute sama 7 detik yang lambat di segment yang sama.

// const calculateAverageSPS = (segments, totalSyllables) => {
//   if (!segments || segments.length === 0) return 0;
//   const startTime = segments[0].start / 1000;
//   const endTime = segments[segments.length - 1].end / 1000;
//   const duration = endTime - startTime;
//   return duration > 0 ? Number((totalSyllables / duration).toFixed(2)) : 0;
// };

// const generateSPSTimeline = (segments, windowSize = 3) => {
//   if (!segments || segments.length === 0) return [];
//   return segments.map((seg) => {
//     const duration = (seg.end - seg.start) / 1000;
//     const syllables = seg.words?.length || 0;
//     const sps = duration > 0 ? syllables / duration : 0;
//     return {
//       time: seg.start / 1000,
//       sps: Number(sps.toFixed(2)),
//     };
//   });
// };

// const calculatePeakSPS = (spsTimeline) => {
//   let peakSPS = 0;
//   let peakTime = 0;
//   for (const point of spsTimeline) {
//     if (point.sps > peakSPS) {
//       peakSPS = point.sps;
//       peakTime = point.time;
//     }
//   }
//   return { peakSPS, peakTime };
// };

// const calculateSPSRolling = (timestamps, windowSize = 3) => {
//   if (!timestamps || timestamps.length === 0) return [];
//   const result = [];
//   for (let i = 0; i < timestamps.length; i++) {
//     const current = timestamps[i];
//     const windowStart = current.start;
//     const windowEnd = current.start + windowSize;
//     let syllableCount = 0;
//     for (const item of timestamps) {
//       if (item.start >= windowStart && item.start < windowEnd) {
//         syllableCount += item.syllables || 1;
//       }
//     }
//     const sps = windowSize > 0 ? syllableCount / windowSize : 0;
//     result.push({ time: current.start, sps: Number(sps.toFixed(2)) });
//   }
//   return result;
// };

// module.exports = {
//   calculateAverageSPS,
//   calculatePeakSPS,
//   generateSPSTimeline,
//   calculateSPSRolling,
// };