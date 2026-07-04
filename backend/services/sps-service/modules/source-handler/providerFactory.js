const youtubeProvider = require("./providers/youtube.provider");
const spotifyProvider = require("./providers/spotify.provider");
const soundcloudProvider = require("./providers/soundcloud.provider");
const genericProvider = require("./providers/generic.provider");

const getProvider = (url) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return youtubeProvider;
  }

  if (url.includes("spotify.com")) {
    return spotifyProvider;
  }

  if (url.includes("soundcloud.com")) {
    return soundcloudProvider;
  }

  return genericProvider;
};

module.exports = { getProvider };