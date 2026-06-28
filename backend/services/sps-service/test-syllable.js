const { processAudio } = require("./modules/audio/audio.service");
const { processSyllable } = require("./modules/syllable/syllable.service");

(async () => {
  try {
    console.log("Running Syllable Service...");

    const audioData = await processAudio({
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });

    const result = await processSyllable(audioData);

    console.log("\nRESULT:\n");

    console.dir(result, { depth: null });

  } catch (err) {
    console.error(err);
  }
})();