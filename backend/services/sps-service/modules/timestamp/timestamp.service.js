const processTimestamp = async (lyricData) => {
  return {
    ...lyricData,

    timestampReady: true,

    timestamps: [
      {
        word: "dummy",
        start: 0.0,
        end: 0.4,
      },
      {
        word: "lyric",
        start: 0.5,
        end: 0.9,
      },
      {
        word: "data",
        start: 1.0,
        end: 1.3,
      },
    ],
  };
};

module.exports = {
  processTimestamp,
};