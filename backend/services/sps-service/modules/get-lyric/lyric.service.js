const processLyric = async (audioData) => {
  return {
    ...audioData,
    lyricReady: true,
    lyric: "dummy lyric data",
  };
};

module.exports = {
  processLyric,
};