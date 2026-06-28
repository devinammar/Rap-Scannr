const { countSyllablesInWord } = require("../../../utils/syllableCounter");

const cleanWord = (word) => {
  if (!word) return "";

  return word
    .toLowerCase()
    .replace(/[^a-z']/g, "") // keep apostrophe
    .trim();
};

const processSyllable = async (whisperData) => {
  const words = whisperData.words || [];

  let totalSyllables = 0;

  const processedWords = words
    .map((item) => {
      const word = cleanWord(item.word);

      if (!word) return null;

      // buang noise kayak (upbeat music)
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

// ____________________________________________________________________

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