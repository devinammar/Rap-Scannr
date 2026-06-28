const { processAudio } = require("./modules/get-audio/audio.service");

const youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

console.log("Running Audio Service...");
console.log("URL:", youtubeUrl);

processAudio({
  source: "youtube",
  url: youtubeUrl,
})
  .then((result) => {
    console.log("\nRESULT:\n");
    console.log(result);
  })
  .catch(console.error);