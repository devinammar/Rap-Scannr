// ngambil data real

const audioService = require("../get-audio/audio.service");
const lyricService = require("../get-lyric/lyric.service");
const timestampService = require("../timestamp/timestamp.service");
const syllableService = require("../syllable/syllable.service");
const spsService = require("../sps/sps.service");
const chartService = require("../chart/chart.service");

const analyze = async (data) => {
  const { url } = data;

  if (!url) throw new Error("URL is required");

  let source = "unknown";
  if (url.includes("youtube.com") || url.includes("youtu.be")) source = "youtube";
  else if (url.includes("spotify.com")) source = "spotify";
  else if (url.includes("soundcloud.com")) source = "soundcloud";

  // Pipeline
  const audio = await audioService.processAudio({ source, url });

  const lyric = await lyricService.processLyric(audio);

  const timestamp = await timestampService.processTimestamp(lyric);

  const syllable = await syllableService.processSyllable(timestamp);

  const sps = await spsService.processSPS(syllable);

  const chart = await chartService.generateChart(sps);

  // Clean output
  return {
    success: true,

    meta: {
      source,
      originalUrl: url,
      youtubeUrl: audio.youtubeUrl,
      title: audio.title || null,
      artist: audio.artist || null,
    },

    stats: {
      averageSPS: sps.averageSPS,
      peakSPS: sps.peakSPS,
      peakTime: sps.peakTime,
      totalWords: syllable.totalWords,
      totalSyllables: syllable.totalSyllables,
    },

    chart: chart.chartData,

    timeline: sps.spsTimeline,
  };
};

const compare = async (data) => {
  const { url1, url2 } = data;

  if (!url1 || !url2) throw new Error("Both URLs are required");

  const song1 = await analyze({ url: url1 });
  const song2 = await analyze({ url: url2 });

  return {
    success: true,

    song1,
    song2,

    comparison: {
      averageWinner:
        song1.stats.averageSPS >= song2.stats.averageSPS ? "song1" : "song2",

      peakWinner:
        song1.stats.peakSPS >= song2.stats.peakSPS ? "song1" : "song2",

      averageDifference: Math.abs(
        song1.stats.averageSPS - song2.stats.averageSPS
      ).toFixed(2),

      peakDifference: Math.abs(
        song1.stats.peakSPS - song2.stats.peakSPS
      ).toFixed(2),
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