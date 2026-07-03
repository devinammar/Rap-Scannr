const { countSyllablesInWord } = require("../../utils/syllableCounter");

const cleanWord = (word) => {
  if (!word) return "";

  return word
    .toLowerCase()
    .replace(/[^a-z']/g, "") // keep apostrophe
    .trim();
};

// extract words dari sentence
const extractWordsFromSegments = (segments) => {
  const words = [];

  for (const segment of segments || []) {
    const splitWords = segment.text.split(" ");

    const duration = segment.end - segment.start;
    const avgWordDuration = duration / (splitWords.length || 1);

    splitWords.forEach((w, i) => {
      const clean = cleanWord(w);

      if (!clean) return;

      words.push({
        word: clean,
        start: segment.start + i * avgWordDuration,
        end: segment.start + (i + 1) * avgWordDuration,
      });
    });
  }

  return words;
};

const processSyllable = async (whisperData) => {
  const segments = whisperData.segments || [];

  // generate words dari segments
  const wordsRaw = extractWordsFromSegments(segments);

  let totalSyllables = 0;

  const processedWords = wordsRaw
    .map((item) => {
      const word = cleanWord(item.word);

      if (!word) return null;

      // skip noise
      if (word.startsWith("(") && word.endsWith(")")) {
        return null;
      }

      const syllables = countSyllablesInWord(word);

      totalSyllables += syllables;

      return {
        word,
        start: item.start,
        end: item.end,
        syllables,
      };
    })
    .filter(Boolean);

  return {
    ...whisperData,

    syllableReady: true,
    totalSyllables,
    words: processedWords,
  };
};

module.exports = {
  processSyllable,
};

// ______________________________________________________________________

// ini kode yg lama

// const countSyllablesInWord = (word) => {
//   word = word.toLowerCase().replace(/[^a-z]/g, "");

//   if (!word) return 0;

//   const vowels = word.match(/[aeiouy]+/g);

//   let count = vowels ? vowels.length : 0;

//   // silent "e"
//   if (word.endsWith("e")) {
//     count--;
//   }

//   // minimal 1 syllable
//   if (count <= 0) {
//     count = 1;
//   }

//   return count;
// };

// const processSyllable = async (timestampData) => {
//   const timestamps = timestampData.timestamps || [];

//   let totalSyllables = 0;

//   const updatedTimestamps = timestamps.map((item) => {
//     const syllables = countSyllablesInWord(item.word);

//     totalSyllables += syllables;

//     return {
//       ...item,
//       syllables,
//     };
//   });

//   return {
//     ...timestampData,

//     syllableReady: true,

//     totalSyllables,

//     timestamps: updatedTimestamps,
//   };
// };

// module.exports = {
//   processSyllable,
// };