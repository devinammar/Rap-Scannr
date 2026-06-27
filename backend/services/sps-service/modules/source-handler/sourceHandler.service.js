// ngambil data real

const audioService = require("../get-audio/audio.service");
const lyricService = require("../get-lyric/lyric.service");
const timestampService = require("../timestamp/timestamp.service");
const spsService = require("../sps/sps.service");
const chartService = require("../chart/chart.service");

const analyze = async (data) => {
  const { url } = data;

  if (!url) {
    throw new Error("URL is required");
  }

  // Detect source
  let source = "unknown";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    source = "youtube";
  } else if (url.includes("spotify.com")) {
    source = "spotify";
  } else if (url.includes("soundcloud.com")) {
    source = "soundcloud";
  }

  // Audio
  const audioResult = await audioService.processAudio({
    source,
    url,
  });

  // Lyric
  const lyricResult = await lyricService.processLyric(audioResult);

  // Timestamp
  const timestampResult =
    await timestampService.processTimestamp(lyricResult);

  // SPS
  const spsResult =
    await spsService.processSPS(timestampResult);

  // Chart
  const chartResult =
    await chartService.generateChart(spsResult);

  // Final result
  return chartResult;
};

const compare = async (data) => {
  const { url1, url2 } = data;

  return {
    success: true,
    song1: {
      url: url1,
    },
    song2: {
      url: url2,
    },
  };
};

module.exports = {
  analyze,
  compare,
};

// ___________________________________________________________

// masih ngambil dummy

// const analyze = async (data) => {
//   return {
//     success: true,
//     service: "sps-service",
//     action: "analyze",
//     receivedData: data,
//   };
// };

// const compare = async (data) => {
//   return {
//     success: true,
//     service: "sps-service",
//     action: "compare",
//     receivedData: data,
//   };
// };

// module.exports = {
//   analyze,
//   compare,
// };