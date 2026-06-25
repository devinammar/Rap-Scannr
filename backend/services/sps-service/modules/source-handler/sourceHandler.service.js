// ngambil data real

const audioService = require("../get-audio/audio.service");
const lyricService = require("../get-lyric/lyric.service");
const timestampService = require("../timestamp/timestamp.service");

const analyze = async (data) => {
  const { url } = data;

  if (!url) {
    throw new Error("URL is required");
  }

  // 1. detect source
  let source = "unknown";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    source = "youtube";
  } else if (url.includes("spotify.com")) {
    source = "spotify";
  } else if (url.includes("soundcloud.com")) {
    source = "soundcloud";
  }

  // 2. AUDIO PIPELINE
  const audioResult = await audioService.processAudio({
    source,
    url,
  });

  // 3. LYRIC PIPELINE
  const lyricResult = await lyricService.processLyric(audioResult);

  // 4. TIMESTAMP PIPELINE (INI YANG LO TAMBAH)
  const timestampResult =
    await timestampService.processTimestamp(lyricResult);

  // 5. FINAL RESPONSE (SEMUA DICHAIN)
  return {
    success: true,
    source,
    url,

    audioReady: timestampResult.audioReady,
    audioPath: timestampResult.audioPath,

    lyricReady: timestampResult.lyricReady,
    lyric: timestampResult.lyric,

    timestampReady: timestampResult.timestampReady,
    timestamps: timestampResult.timestamps,
  };
};

const compare = async (data) => {
  const { url1, url2 } = data;

  return {
    success: true,
    song1: { url: url1 },
    song2: { url: url2 },
  };
};

module.exports = {
  analyze,
  compare,
};

// _________________________________________________________

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