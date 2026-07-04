const SoundCloud = require("soundcloud-scraper");

const getSoundcloudMetadata = async (url) => {
  const client = new SoundCloud.Client();
  const song = await client.getSongInfo(url);
  return {
    title: song.title,
    artist: song.author?.name || null,
  };
};

module.exports = { getSoundcloudMetadata };