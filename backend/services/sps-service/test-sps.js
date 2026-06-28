const { processAudio } = require("./modules/get-audio/audio.service");
const { processSyllable } = require("./modules/syllable/syllable.service");
const { processSPS } = require("./modules/sps/sps.service");

(async () => {
  try {
    console.log("Running SPS Service...");

    const audioData = await processAudio({
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });

    const syllableData = await processSyllable(audioData);

    const result = await processSPS(syllableData);

    console.dir(result, { depth: null });
  } catch (err) {
    console.error(err);
  }
})();