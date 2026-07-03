const axios = require("axios");

const searchYoutube = async (keyword) => {
  const apiKey = process.env.YOUTUBE_API_KEY;

  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        q: keyword,
        type: "video",
        maxResults: 1,
        key: apiKey,
      },
    }
  );

  const items = response.data.items;

  if (!items || items.length === 0) {
    throw new Error("No matching YouTube video found");
  }

  const videoId = items[0].id.videoId;

  return `https://www.youtube.com/watch?v=${videoId}`;
};

module.exports = {
  searchYoutube,
};