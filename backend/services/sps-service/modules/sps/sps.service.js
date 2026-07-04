// setelah improvement:
// Setiap 1 detik, hitung syllable dalam window 3 detik ke depan. 
// Jadi setiap titik waktu punya nilai SPS yang lebih granular dan peak yang sesungguhnya bisa ketangkep

const {
  calculateAverageSPS,
  calculatePeakSPS,
  generateSPSTimeline,
} = require("../../utils/spsCalculator");

const processSPS = async (syllableData) => {
  const segments = syllableData.segments || [];
  const words = syllableData.words || [];
  const totalSyllables = syllableData.totalSyllables || 0;

  if (segments.length === 0 || totalSyllables === 0) {
    return {
      ...syllableData,
      spsReady: true,
      averageSPS: 0,
      peakSPS: 0,
      peakTime: 0,
      spsTimeline: [],
    };
  }

  // averageSPS tetap pake segments (untuk durasi keseluruhan)
  const averageSPS = calculateAverageSPS(segments, totalSyllables);

  // spsTimeline pake words dengan rolling window 3 detik
  // Sebelum: dihitung per-segment Whisper (~5-10 detik), peak bisa hilang ke-average
  // Setelah: rolling window per 1 detik step, 3 detik window — peak lebih akurat
  const spsTimeline = generateSPSTimeline(words);

  const { peakSPS, peakTime } = calculatePeakSPS(spsTimeline);

  return {
    ...syllableData,
    spsReady: true,
    averageSPS,
    peakSPS,
    peakTime,
    spsTimeline,
  };
};

module.exports = {
  processSPS,
};

// _____________________________________________________________

// sebelum improvement:
// Whisper bagi audio jadi segment ~5-10 detik. SPS dihitung per segment, 
// Kalau dalam 1 segment ada bagian cepet dan lambat, semua di-average jadi 1 angka. 
// Peak yang terjadi dalam 3 detik bisa hilang karena ke-dilute sama 7 detik yang lambat di segment yang sama.

// const {
//   calculateAverageSPS,
//   calculatePeakSPS,
//   generateSPSTimeline,
// } = require("../../utils/spsCalculator");

// const processSPS = async (syllableData) => {
//   const segments = syllableData.segments || [];
//   const totalSyllables = syllableData.totalSyllables || 0;

//   if (segments.length === 0 || totalSyllables === 0) {
//     return {
//       ...syllableData,
//       spsReady: true,

//       averageSPS: 0,

//       peakSPS: 0,
//       peakTime: 0,

//       spsTimeline: [],
//     };
//   }

//   const averageSPS = calculateAverageSPS(
//     segments,
//     totalSyllables
//   );

//   const spsTimeline = generateSPSTimeline(
//     segments
//   );

//   const {
//     peakSPS,
//     peakTime,
//   } = calculatePeakSPS(
//     spsTimeline
//   );

//   return {
//     ...syllableData,

//     spsReady: true,

//     averageSPS,

//     peakSPS,
//     peakTime,

//     spsTimeline,
//   };
// };

// module.exports = {
//   processSPS,
// };

// ____________________________________________________________

// ini yg lama

// const processSPS = async (timestampData) => {
//   const timestamps = timestampData.timestamps || [];

//   const totalSyllables = timestamps.length;

//   if (totalSyllables === 0) {
//     return {
//       ...timestampData,
//       spsReady: true,
//       averageSPS: 0,
//       peakSPS: 0,
//       peakTime: 0,
//       totalSyllables: 0,
//       spsTimeline: [],
//     };
//   }

//   const startTime = timestamps[0].start;
//   const endTime = timestamps[timestamps.length - 1].end;

//   const duration = endTime - startTime;

//   const averageSPS =
//     duration > 0
//       ? Number((totalSyllables / duration).toFixed(2))
//       : 0;

//   const spsTimeline = [];

//   for (const item of timestamps) {
//     const wordDuration = item.end - item.start;

//     const sps =
//       wordDuration > 0
//         ? Number((1 / wordDuration).toFixed(2))
//         : 0;

//     spsTimeline.push({
//       time: item.start,
//       sps,
//     });
//   }

//   let peakSPS = 0;
//   let peakTime = 0;

//   for (const point of spsTimeline) {
//     if (point.sps > peakSPS) {
//       peakSPS = point.sps;
//       peakTime = point.time;
//     }
//   }

//   return {
//     ...timestampData,

//     spsReady: true,

//     averageSPS,

//     peakSPS,

//     peakTime,

//     totalSyllables,

//     spsTimeline,
//   };
// };

// module.exports = {
//   processSPS,
// };