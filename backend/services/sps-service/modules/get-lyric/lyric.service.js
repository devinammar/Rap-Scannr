const fs = require("fs");
const { parseWhisperJson } = require("../../utils/whisperJsonParser");
const { runWhisper } = require("../../utils/whisperRunner"); // tambah ini

const processLyric = async (audioData) => {
  try {
    await runWhisper(audioData.audioPath); // tambah ini

    const basePath = audioData.audioPath.replace(".wav", "");
    const jsonPath = `${basePath}.json`;
    console.log("Reading whisper file:", jsonPath);
    if (!fs.existsSync(jsonPath)) {
      throw new Error(`Whisper JSON not found: ${jsonPath}`);
    }
    const raw = fs.readFileSync(jsonPath, "utf-8");
    const json = JSON.parse(raw);
    const { segments, words } = parseWhisperJson(json);
    const lyricText = segments.map(s => s.text).join(" ").trim();
    return {
      ...audioData,
      lyricReady: true,
      lyric: lyricText,
      segments,
      words,
      totalSegments: segments.length,
    };
  } catch (err) {
    console.error("Lyric processing failed:", err);
    return {
      ...audioData,
      lyricReady: false,
      lyric: null,
      error: err.message,
    };
  }
};

module.exports = { processLyric };

// ____________________________________________________________________

// ini kode yg lama

// const processLyric = async (audioData) => {
//   return {
//     ...audioData,
//     lyricReady: true,
//     lyric: "dummy lyric data",
//   };
// };

// module.exports = {
//   processLyric,
// };