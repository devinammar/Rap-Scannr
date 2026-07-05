const { getSoundcloudMetadata } = require("../../../utils/soundcloudMetadata");
const { searchYoutube } = require("../../../utils/youtubeSearch");
const { downloadYoutubeAudio } = require("../../../utils/youtubeDownloader");
const path = require("path");

const process = async (url) => {
  const metadata = await getSoundcloudMetadata(url);
  console.log("SOUNDCLOUD METADATA:", metadata);

  const keyword = `${metadata.artist || ""} ${metadata.title || ""}`.trim();
  console.log("YOUTUBE SEARCH KEYWORD:", keyword);

  if (!keyword || keyword.length < 2) throw new Error("Invalid SoundCloud metadata keyword");

  const youtubeUrl = await searchYoutube(keyword);
  console.log("YOUTUBE RESULT:", youtubeUrl);

  const audioPath = await downloadYoutubeAudio(youtubeUrl);

  return {
    success: true,
    source: "soundcloud",
    originalUrl: url,
    youtubeUrl,
    title: metadata.title,
    artist: metadata.artist,
    audioReady: true,
    audioPath,
    duration: 0,
    format: path.extname(audioPath).replace(".", ""),
  };
};

module.exports = { process };