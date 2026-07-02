const spotifyUrlInfo = require("spotify-url-info");
const fetch = require("node-fetch");

const { getData } = spotifyUrlInfo(fetch);

const getSpotifyMetadata = async (spotifyUrl) => {
  try {
    const data = await getData(spotifyUrl);

    return {
      artist: data.artists[0].name,
      title: data.name,
    };
  } catch (err) {
    throw new Error("Failed to get Spotify metadata");
  }
};

module.exports = {
  getSpotifyMetadata,
};