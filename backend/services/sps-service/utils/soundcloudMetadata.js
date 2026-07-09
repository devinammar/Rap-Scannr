const SoundCloud = require("soundcloud-scraper");
const axios = require("axios");

const cleanSoundcloudUrl = async (url) => {
  if (url.includes("on.soundcloud.com")) {
    try {
      const response = await axios.get(url, {
        maxRedirects: 5,
        validateStatus: (status) => status < 400,
      });
      url = response.request.res.responseUrl || url;
    } catch {
    }
  }

  const urlObj = new URL(url);
  urlObj.search = "";
  return urlObj.toString();
};

const getSoundcloudMetadata = async (url) => {
  const cleanUrl = await cleanSoundcloudUrl(url);
  console.log("SOUNDCLOUD CLEANED URL:", cleanUrl);
  const client = new SoundCloud.Client();
  const song = await client.getSongInfo(cleanUrl);
  return {
    title: song.title,
    artist: song.author?.name || null,
  };
};

module.exports = { getSoundcloudMetadata };