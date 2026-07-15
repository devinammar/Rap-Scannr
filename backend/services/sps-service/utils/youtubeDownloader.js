// ini pake yt-dlp, alih-alih pake youtube API dari RapidAPI

// const path = require("path");
// const fs = require("fs");
// const { exec } = require("child_process");
// const { v4: uuid } = require("uuid");

// const downloadYoutubeAudio = async (url) => {
//   const tempDir = path.join(__dirname, "../temp");

//   if (!fs.existsSync(tempDir)) {
//     fs.mkdirSync(tempDir, { recursive: true });
//   }

//   const wavPath = path.join(tempDir, `${uuid()}.wav`);

//   await new Promise((resolve, reject) => {
//     exec(
//       `yt-dlp -x --audio-format wav -o "${wavPath}" "${url}"`,
//       (error, stdout, stderr) => {
//         if (error) return reject(new Error(stderr || error.message));
//         resolve();
//       }
//     );
//   });

//   return wavPath;
// };

// module.exports = {
//   downloadYoutubeAudio,
// };

// ________________________________________________________

// ini pake youtube API dari RapidAPI

const axios = require("axios");
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const { v4: uuid } = require("uuid");

const downloadYoutubeAudio = async (url) => {
  const tempDir = path.join(__dirname, "../temp");

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  // Ambil video ID dari URL
  const videoIdMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (!videoIdMatch) {
    throw new Error("Invalid YouTube URL");
  }
  const videoId = videoIdMatch[1];

  // Hit RapidAPI untuk dapat MP3 URL
  const response = await axios.get("https://youtube-mp36.p.rapidapi.com/dl", {
    params: { id: videoId },
    headers: {
      "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  });

  const mp3Url = response.data.link;

  if (!mp3Url) {
    throw new Error("Failed to get MP3 URL from RapidAPI");
  }

  // Download MP3
  const mp3Path = path.join(tempDir, `${uuid()}.mp3`);
  const wavPath = mp3Path.replace(".mp3", ".wav");

  const mp3Response = await axios.get(mp3Url, { responseType: "arraybuffer" });
  fs.writeFileSync(mp3Path, mp3Response.data);

  // Convert MP3 ke WAV pake ffmpeg
  await new Promise((resolve, reject) => {
    exec(`ffmpeg -i "${mp3Path}" "${wavPath}"`, (error) => {
      if (error) return reject(error);
      resolve();
    });
  });

  // Hapus file MP3 setelah convert
  fs.unlinkSync(mp3Path);

  return wavPath;
};

module.exports = {
  downloadYoutubeAudio,
};