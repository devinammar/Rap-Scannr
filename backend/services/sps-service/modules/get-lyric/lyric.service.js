const { runWhisper } = require("../../utils/whisperRunner");
const { parseWhisperOutput } = require("../../utils/whisperParser");

const processLyric = async (audioData) => {
  if (!audioData?.audioPath) {
    throw new Error("audioPath is required for lyric processing");
  }

  try {
    // STEP 1 — run whisper
    const whisperOutput = await runWhisper(audioData.audioPath);

    // STEP 2 — parse hasil whisper
    const segments = parseWhisperOutput(whisperOutput);

    // STEP 3 — extract full lyric text
    const lyricText = segments
      .map((s) => s.text)
      .join(" ")
      .trim();

    return {
      ...audioData,

      // LYRIC RESULT REAL (NO MORE DUMMY)
      lyricReady: true,
      lyric: lyricText,

      // segment timestamp detail
      segments,

      // optional metadata
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

module.exports = {
  processLyric,
};

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