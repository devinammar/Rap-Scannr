const {
  downloadYoutubeAudio,
} = require("./utils/youtubeDownloader");

(async () => {
  try {
    const file = await downloadYoutubeAudio(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );

    console.log(file);
  } catch (err) {
    console.error(err);
  }
})();