// ngambil data real

const audioService = require("../get-audio/audio.service");
const lyricService = require("../get-lyric/lyric.service");

const analyze = async (data) => {
  const { url } = data;

  if (!url) {
    throw new Error("URL is required");
  }

  let source = "unknown";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    source = "youtube";
  } else if (url.includes("spotify.com")) {
    source = "spotify";
  } else if (url.includes("soundcloud.com")) {
    source = "soundcloud";
  }

  const audioResult = await audioService.processAudio({ source, url });
  const lyricResult = await lyricService.processLyric(audioResult);

  return {
    success: true,
    source,
    url,
    audioReady: lyricResult.audioReady,
    audioPath: lyricResult.audioPath,
    lyricReady: lyricResult.lyricReady,
    lyric: lyricResult.lyric,
  };
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

// _______________________________________________________

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