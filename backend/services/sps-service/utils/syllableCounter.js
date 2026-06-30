const { dictionary } = require("cmu-pronouncing-dictionary-cjs");
const { syllable } = require("syllable");

const countSyllablesInWord = (word) => {
  word = word
    .toLowerCase()
    .replace(/[^a-z']/g, "");

  if (!word) return 0;

  const pronunciation = dictionary[word];

  if (pronunciation) {
    const stressMarkers = pronunciation.match(/[0-9]/g);
    return stressMarkers ? stressMarkers.length : 1;
  }

  // fallback kalau kata nggak ada di kamus (typo, slang, nama)
  return Math.max(syllable(word), 1);
};

module.exports = {
  countSyllablesInWord,
};