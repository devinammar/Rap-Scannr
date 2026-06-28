const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const downloadYoutubeAudio = (url) => {
  return new Promise((resolve, reject) => {
    const tempDir = path.join(__dirname, "../temp");

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const fileName = `${uuid()}.%(ext)s`;
    const outputTemplate = path.join(tempDir, fileName);

    const command = `/home/codespace/.python/current/bin/yt-dlp -x --audio-format wav -o "${outputTemplate}" "${url}"`;

    exec(command, (error) => {
      if (error) {
        return reject(error);
      }

      const files = fs.readdirSync(tempDir);

      const newestFile = files
        .map((file) => ({
          file,
          time: fs.statSync(path.join(tempDir, file)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time)[0];

      if (!newestFile) {
        return reject(new Error("Audio file not found"));
      }

      resolve(path.join(tempDir, newestFile.file));
    });
  });
};

module.exports = {
  downloadYoutubeAudio,
};