const { runWhisper } = require("./utils/whisperRunner");
const { parseWhisperOutput } = require("./utils/whisperParser");

const audioPath =
"/workspaces/Rap-Scannr/backend/services/sps-service/temp/278b9062-60c8-40f3-a18e-3ac18b003c8e.wav";

runWhisper(audioPath)
  .then((output) => {

    const segments = parseWhisperOutput(output);

    console.log(segments);

  })
  .catch(console.error);

// _______________________________________________________________________

// const { runWhisper } = require("./utils/whisperRunner");

// const audioPath =
// "/workspaces/Rap-Scannr/backend/services/sps-service/temp/278b9062-60c8-40f3-a18e-3ac18b003c8e.wav";

// console.log("Running Whisper...");
// console.log("Audio:", audioPath);

// runWhisper(audioPath)
//   .then((output) => {
//     console.log("\nWHISPER OUTPUT\n");
//     console.log(output);
//   })
//   .catch((err) => {
//     console.error("Whisper error:");
//     console.error(err);
//   });