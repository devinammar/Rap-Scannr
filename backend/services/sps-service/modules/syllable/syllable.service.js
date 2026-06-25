const countSyllablesInWord = (word) => {
  word = word.toLowerCase().replace(/[^a-z]/g, "");

  if (!word) return 0;

  // basic vowel groups detection
  const vowels = word.match(/[aeiouy]+/g);
  let count = vowels ? vowels.length : 0;

  // silent "e" rule
  if (word.endsWith("e")) count--;

  // minimum 1 syllable per word
  if (count <= 0) count = 1;

  return count;
};

const countSyllables = (text) => {
  const words = text.split(" ");

  let total = 0;

  for (const word of words) {
    total += countSyllablesInWord(word);
  }

  return total;
};

// MAIN FUNCTION
const processSyllable = async (lyricData) => {
  const text = lyricData.lyric || lyricData.text || "";

  const syllableCount = countSyllables(text);

  return {
    ...lyricData,
    syllableReady: true,
    syllableCount,
  };
};

module.exports = {
  processSyllable,
};