const axios = require("axios");

const getDeezerMetadata = async (url) => {
  // Resolve short link deezer jika formatnya link.deezer.com
  if (url.includes("link.deezer.com")) {
    const response = await axios.get(url, {
      maxRedirects: 5,
      validateStatus: (status) => status < 400,
    });
    url = response.request.res?.responseUrl || response.config.url;
  }

  const trackIdMatch = url.match(/deezer\.com\/(?:[a-z]+\/)?track\/(\d+)/);
  if (!trackIdMatch) throw new Error("Invalid Deezer URL");

  const trackId = trackIdMatch[1];
  const response = await axios.get(`https://api.deezer.com/track/${trackId}`);
  const data = response.data;
  if (data.error) throw new Error("Deezer track not found");

  return {
    title: data.title,
    artist: data.artist?.name || null,
  };
};

module.exports = { getDeezerMetadata };