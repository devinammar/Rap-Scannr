const processSPS = async (syllableData) => {
  const timestamps = syllableData.timestamps || [];
  const totalSyllables = syllableData.totalSyllables || 0;

  if (timestamps.length === 0 || totalSyllables === 0) {
    return {
      ...syllableData,
      spsReady: true,
      averageSPS: 0,
      peakSPS: 0,
      peakTime: 0,
      spsTimeline: [],
    };
  }

  const startTime = timestamps[0].start;
  const endTime = timestamps[timestamps.length - 1].end;

  const duration = endTime - startTime;

  const averageSPS =
    duration > 0
      ? Number((totalSyllables / duration).toFixed(2))
      : 0;

  const spsTimeline = [];

  for (const item of timestamps) {
    const wordDuration = item.end - item.start;

    // sementara masih dummy:
    // anggap setiap kata = 1 syllable
    const syllables = item.syllables || 1;

    const sps =
      wordDuration > 0
        ? Number((syllables / wordDuration).toFixed(2))
        : 0;

    spsTimeline.push({
      time: item.start,
      sps,
    });
  }

  let peakSPS = 0;
  let peakTime = 0;

  for (const point of spsTimeline) {
    if (point.sps > peakSPS) {
      peakSPS = point.sps;
      peakTime = point.time;
    }
  }

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