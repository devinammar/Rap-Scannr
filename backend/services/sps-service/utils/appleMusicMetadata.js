const axios = require("axios");

const getAppleMusicMetadata = async (url) => {
  // utk extract ID dari url Apple Music
  const trackIdMatch = url.match(/[?&]i=(\d+)/);
  const albumIdMatch = url.match(/\/album\/[^/]+\/(\d+)/);

  const id = trackIdMatch ? trackIdMatch[1] : albumIdMatch ? albumIdMatch[1] : null;

  if (!id) throw new Error("Invalid Apple Music URL");

  const response = await axios.get(`https://itunes.apple.com/lookup?id=${id}`);
  const item = response.data.results?.[0];

  if (!item) throw new Error("Apple Music track not found");

  return {
    title: item.trackName || item.collectionName,
    artist: item.artistName,
  };
};

module.exports = { getAppleMusicMetadata };