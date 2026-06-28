const path = require("path");
const { downloadYoutubeAudio } = require("../../utils/youtubeDownloader");

const processAudio = async ({ source, url }) => {
  if (!url) {
    throw new Error("URL is required");
  }

  let platform = "unknown";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    platform = "youtube";
  } else if (url.includes("spotify.com")) {
    platform = "spotify";
  } else if (url.includes("soundcloud.com")) {
    platform = "soundcloud";
  }

  let audioPath = null;

  switch (platform) {
    case "youtube":
      audioPath = await downloadYoutubeAudio(url);
      break;

    case "spotify":
      throw new Error("Spotify downloader not implemented yet");

    case "soundcloud":
      throw new Error("SoundCloud downloader not implemented yet");

    default:
      throw new Error("Unsupported source");
  }

  return {
    success: true,

    source: platform,

    url,

    audioReady: true,

    audioPath,

    duration: 0,

    format: path.extname(audioPath).replace(".", ""),
  };
};

module.exports = {
  processAudio,
};

// __________________________________________________________________

// ini kode lama

// const processAudio = async ({ source, url }) => {
//   if (!url) {
//     throw new Error("URL is required");
//   }

//   // STEP 1 — Normalize input source
//   let platform = "unknown";

//   if (url.includes("youtube.com") || url.includes("youtu.be")) {
//     platform = "youtube";
//   } else if (url.includes("spotify.com")) {
//     platform = "spotify";
//   } else if (url.includes("soundcloud.com")) {
//     platform = "soundcloud";
//   }

//   // STEP 2 — Simulasi audio extraction
//   // nanti ini bakal:
//   // youtube → yt-dlp
//   // spotify → (API / preview / workaround)
//   // soundcloud → scraper / API

//   const audioData = {
//     success: true,
//     source: platform,
//     url,

//     // core pipeline data
//     audioReady: true,

//     // ini nanti hasil real extraction
//     audioPath: `/tmp/${platform}-audio.wav`,

//     duration: 180, // dummy seconds
//     format: "wav"
//   };

//   return audioData;
// };

// module.exports = {
//   processAudio,
// };