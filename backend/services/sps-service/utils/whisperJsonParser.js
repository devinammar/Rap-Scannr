const parseWhisperJson = (data) => {
  const segments = data.transcription || data.segments || [];

  const parsedSegments = segments.map((seg) => {
    const rawText = (seg.text || "").replace(/♪/g, "").replace(/[()]/g, "").trim();
    const wordList = rawText.split(/\s+/).filter(w => w);
    const segStart = seg.offsets?.from || 0;
    const segEnd = seg.offsets?.to || 0;
    const duration = segEnd - segStart;
    const wordDuration = wordList.length > 0 ? duration / wordList.length : 0;

    const words = wordList.map((word, i) => ({
      word: word.toLowerCase(),
      start: segStart + i * wordDuration,
      end: segStart + (i + 1) * wordDuration,
    }));

    return {
      start: segStart,
      end: segEnd,
      text: rawText,
      words,
    };
  });

  const words = parsedSegments.flatMap(s => s.words);
  return { segments: parsedSegments, words };
};

module.exports = { parseWhisperJson };

// ______________________________________________________________

// ini kode yg lama

// const fs = require("fs");

// const parseWhisperJSON = (jsonPath) => {
//   const raw = fs.readFileSync(jsonPath, "utf8");

//   const data = JSON.parse(raw);

//   const segments = (data.transcription || []).map((segment) => {
//     const words = (segment.tokens || [])
//       .filter((token) => token.text)
//       .map((token) => ({
//         word: token.text
//           .replace(/♪/g, "")
//           .replace(/\n/g, "")
//           .trim(),

//         start: token.t0 / 100,
//         end: token.t1 / 100,

//         probability: token.p,
//       }))
//       .filter((word) => word.word.length > 0);

//     const text = words
//       .map((w) => w.word)
//       .join(" ")
//       .replace(/\s+/g, " ")
//       .trim()

//       // hilangkan spasi sebelum tanda baca
//       .replace(/\s+([,.!?])/g, "$1");

//     return {
//       start: segment.offsets.from / 100,
//       end: segment.offsets.to / 100,

//       text,

//       words,
//     };
//   });

//   return segments;
// };

// module.exports = {
//   parseWhisperJSON,
// };