const fs = require("fs");

const parseWhisperJSON = (jsonPath) => {
  const raw = fs.readFileSync(jsonPath, "utf8");

  const data = JSON.parse(raw);

  const segments = (data.transcription || []).map((segment) => {
    const words = (segment.tokens || [])
      .filter((token) => token.text)
      .map((token) => ({
        word: token.text
          .replace(/♪/g, "")
          .replace(/\n/g, "")
          .trim(),

        start: token.t0 / 100,
        end: token.t1 / 100,

        probability: token.p,
      }))
      .filter((word) => word.word.length > 0);

    const text = words
      .map((w) => w.word)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim()

      // hilangkan spasi sebelum tanda baca
      .replace(/\s+([,.!?])/g, "$1");

    return {
      start: segment.offsets.from / 100,
      end: segment.offsets.to / 100,

      text,

      words,
    };
  });

  return segments;
};

module.exports = {
  parseWhisperJSON,
};