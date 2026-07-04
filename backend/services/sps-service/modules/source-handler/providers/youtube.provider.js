const { getYoutubeMetadata } = require("../../../utils/youtubeSearch");

const process = async (url) => {
  const metadata = await getYoutubeMetadata(url);

  return {
    source: "youtube",
    youtubeUrl: url,
    title: metadata.title || null,
    artist: metadata.artist || null,
  };
};

module.exports = { process };

// ___________________________________________________________

// ini yg lama

// const audioService = require("../../get-audio/audio.service");

// const process = async (url) => {
//   return await audioService.processAudio({
//     source: "youtube",
//     url,
//   });
// };

// module.exports = {
//   process,
// };