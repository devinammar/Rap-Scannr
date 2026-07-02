const ytSearch = require("yt-search");

const searchYoutube = async (keyword) => {
  const result = await ytSearch(keyword);

  if (!result.videos.length) {
    throw new Error("No matching YouTube video found");
  }

  return result.videos[0].url;
};

module.exports = {
  searchYoutube,
};