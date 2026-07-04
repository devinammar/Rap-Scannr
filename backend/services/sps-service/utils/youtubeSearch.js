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
  if (!items || items.length === 0) throw new Error("No matching YouTube video found");

  const videoId = items[0].id.videoId;
  return `https://www.youtube.com/watch?v=${videoId}`;
};

const getYoutubeMetadata = async (url) => {
  const videoIdMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (!videoIdMatch) return { title: null, artist: null };

  const videoId = videoIdMatch[1];
  const apiKey = process.env.YOUTUBE_API_KEY;

  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/videos",
    {
      params: {
        part: "snippet",
        id: videoId,
        key: apiKey,
      },
    }
  );

  const item = response.data.items?.[0];
  if (!item) return { title: null, artist: null };

  return {
    title: item.snippet.title,
    artist: item.snippet.channelTitle,
  };
};

module.exports = {
  searchYoutube,
  getYoutubeMetadata,
};