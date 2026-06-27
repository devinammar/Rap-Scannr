// ngambil data real

const audioService = require("../get-audio/audio.service");
const lyricService = require("../get-lyric/lyric.service");
const timestampService = require("../timestamp/timestamp.service");
const syllableService = require("../syllable/syllable.service");
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

  // Syllable
  const syllableResult =
    await syllableService.processSyllable(timestampResult);

  // SPS
  const spsResult =
    await spsService.processSPS(syllableResult);

  // Chart
  const chartResult =
    await chartService.generateChart(spsResult);

  return chartResult;
};

const compare = async (data) => {
  const { url1, url2 } = data;

  if (!url1 || !url2) {
    throw new Error("Both URLs are required");
  }

  // Jalankan pipeline analyze() untuk kedua lagu
  const song1 = await analyze({
    url: url1,
  });

  const song2 = await analyze({
    url: url2,
  });

  const averageDifference = Number(
    Math.abs(song1.averageSPS - song2.averageSPS).toFixed(2)
  );

  const peakDifference = Number(
    Math.abs(song1.peakSPS - song2.peakSPS).toFixed(2)
  );

  return {
    success: true,

    song1,

    song2,

    comparison: {
      averageWinner:
        song1.averageSPS >= song2.averageSPS
          ? "song1"
          : "song2",

      peakWinner:
        song1.peakSPS >= song2.peakSPS
          ? "song1"
          : "song2",

      averageDifference,

      peakDifference,
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