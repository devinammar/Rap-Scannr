const { processLyric } = require("./modules/get-lyric/lyric.service");

const audioData = {
  audioPath:
    "/workspaces/Rap-Scannr/backend/services/sps-service/temp/278b9062-60c8-40f3-a18e-3ac18b003c8e.wav",
};

console.log("Running Lyric Service...");
console.log("Audio:", audioData.audioPath);

processLyric(audioData)
  .then((result) => {
    console.log("\nRESULT:\n");
    console.log(result);
  })
  .catch((err) => {
    console.error("\nERROR:");
    console.error(err);
  });