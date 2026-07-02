const audioService = require("../../get-audio/audio.service");

const process = async (url) => {
  return await audioService.processAudio({
    source: "youtube",
    url,
  });
};

module.exports = {
  process,
};