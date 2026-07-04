const { getSpotifyMetadata } = require("../../../utils/spotifyMetadata");
const { searchYoutube } = require("../../../utils/youtubeSearch");

const process = async (url) => {
  const metadata = await getSpotifyMetadata(url);

  const keyword = `${metadata.artist || ""} ${metadata.title || ""}`.trim();

  if (!keyword) {
    throw new Error("Invalid Spotify metadata");
  }

  const youtubeUrl = await searchYoutube(keyword);

  return {
    source: "spotify",
    youtubeUrl,
    title: metadata.title || null,
    artist: metadata.artist || null,
  };
};

module.exports = { process };