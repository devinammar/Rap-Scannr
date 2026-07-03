const processTimestamp = async (lyricData) => {
  return {
    ...lyricData,
    timestampReady: true,
  };
};

module.exports = {
  processTimestamp,
};