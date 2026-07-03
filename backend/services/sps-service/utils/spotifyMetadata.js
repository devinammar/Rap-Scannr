const spotifyUrlInfo = require("spotify-url-info");
const fetch = require("node-fetch");

const { getData } = spotifyUrlInfo(fetch);

const getSpotifyMetadata = async (spotifyUrl) => {
  try {
    const cleanUrl = spotifyUrl.split("?")[0];

    const data = await getData(cleanUrl);

    if (!data || !data.name || !data.artists) {
      throw new Error("Invalid Spotify data");
    }

    return {
      artist: data.artists?.[0]?.name || "unknown artist",
      title: data.name || "unknown title",
    };

  } catch (err) {
    console.error("SPOTIFY METADATA ERROR:", err.message);
    throw new Error("Failed to get Spotify metadata");
  }
};

module.exports = {
  getSpotifyMetadata,
};

// _________________________________________________________

// yg lama

// const spotifyUrlInfo = require("spotify-url-info");
// const fetch = require("node-fetch");

// const { getData } = spotifyUrlInfo(fetch);

// const getSpotifyMetadata = async (spotifyUrl) => {
//   try {
//     const data = await getData(spotifyUrl);

//     return {
//       artist: data.artists[0].name,
//       title: data.name,
//     };
//   } catch (err) {
//     throw new Error("Failed to get Spotify metadata");
//   }
// };

// module.exports = {
//   getSpotifyMetadata,
// };