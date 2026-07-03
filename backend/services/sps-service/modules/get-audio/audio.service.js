const path = require("path");

const { downloadYoutubeAudio } = require("../../utils/youtubeDownloader");
const { getSpotifyMetadata } = require("../../utils/spotifyMetadata");
const { searchYoutube } = require("../../utils/youtubeSearch");

const processAudio = async ({ source, url }) => {
  if (!url) {
    throw new Error("URL is required");
  }

  let platform = source;

  if (!platform) {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      platform = "youtube";
    } else if (url.includes("spotify.com")) {
      platform = "spotify";
    } else if (url.includes("soundcloud.com")) {
      platform = "soundcloud";
    } else {
      platform = "unknown";
    }
  }

  let youtubeUrl = url;

  try {
    switch (platform) {
      case "youtube":
        break;

      case "spotify": {
        const metadata = await getSpotifyMetadata(url);

        console.log("SPOTIFY METADATA:", metadata);

        const keyword = `${metadata.artist || ""} ${metadata.title || ""}`.trim();

        console.log("YOUTUBE SEARCH KEYWORD:", keyword);

        if (!keyword) {
          throw new Error("Empty keyword from Spotify metadata");
        }

        youtubeUrl = await searchYoutube(keyword);

        console.log("YOUTUBE RESULT:", youtubeUrl);

        break;
      }

      case "soundcloud":
        throw new Error("SoundCloud is not implemented yet");

      default:
        throw new Error("Unsupported source");
    }

    const audioPath = await downloadYoutubeAudio(youtubeUrl);

    return {
      success: true,
      source: platform,
      originalUrl: url,
      youtubeUrl,
      audioReady: true,
      audioPath,
      duration: 0,
      format: path.extname(audioPath).replace(".", ""),
    };

  } catch (err) {
    console.error("AUDIO SERVICE ERROR:", err);
    throw err;
  }
};

module.exports = {
  processAudio,
};

// _______________________________________________________________________

// yg lama

// const path = require("path");
// const { downloadYoutubeAudio } = require("../../utils/youtubeDownloader");
// const { processLyric } = require("../get-lyric/lyric.service");

// const processAudio = async ({ source, url }) => {
//   if (!url) {
//     throw new Error("URL is required");
//   }

//   let platform = "unknown";

//   if (url.includes("youtube.com") || url.includes("youtu.be")) {
//     platform = "youtube";
//   } else if (url.includes("spotify.com")) {
//     platform = "spotify";
//   } else if (url.includes("soundcloud.com")) {
//     platform = "soundcloud";
//   }

//   let audioPath = null;

//   switch (platform) {
//     case "youtube":
//       audioPath = await downloadYoutubeAudio(url);
//       break;

//     case "spotify":
//       throw new Error("Spotify downloader not implemented yet");

//     case "soundcloud":
//       throw new Error("SoundCloud downloader not implemented yet");

//     default:
//       throw new Error("Unsupported source");
//   }

//   const audioData = {
//     success: true,

//     source: platform,

//     url,

//     audioReady: true,

//     audioPath,

//     duration: 0,

//     format: path.extname(audioPath).replace(".", ""),
//   };

//   // lanjut ke Whisper
//   const lyricData = await processLyric(audioData);

//   return lyricData;
// };

// module.exports = {
//   processAudio,
// };

// _________________________________________________________________

// ini ga kepake

// const path = require("path");
// const { downloadYoutubeAudio } = require("../../utils/youtubeDownloader");
// const { processLyric } = require("../get-lyric/lyric.service");

// const processAudio = async ({ source, url }) => {
//   if (!url) {
//     throw new Error("URL is required");
//   }

//   let platform = "unknown";

//   if (url.includes("youtube.com") || url.includes("youtu.be")) {
//     platform = "youtube";
//   } else if (url.includes("spotify.com")) {
//     platform = "spotify";
//   } else if (url.includes("soundcloud.com")) {
//     platform = "soundcloud";
//   }

//   let audioPath = null;

//   switch (platform) {
//     case "youtube":
//       audioPath = await downloadYoutubeAudio(url);
//       break;

//     case "spotify":
//       throw new Error("Spotify downloader not implemented yet");

//     case "soundcloud":
//       throw new Error("SoundCloud downloader not implemented yet");

//     default:
//       throw new Error("Unsupported source");
//   }

//   const audioData = {
//     success: true,

//     source: platform,

//     url,

//     audioReady: true,

//     audioPath,

//     duration: 0,

//     format: path.extname(audioPath).replace(".", ""),
//   };

//   // lanjut ke Whisper
//   const lyricData = await processLyric(audioData);

//   return lyricData;
// };

// module.exports = {
//   processAudio,
// };

// _____________________________________________________________________

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