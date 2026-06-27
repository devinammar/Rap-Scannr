const countSyllablesInWord = (word) => {
  word = word.toLowerCase().replace(/[^a-z]/g, "");

  if (!word) return 0;

  const vowels = word.match(/[aeiouy]+/g);

  let count = vowels ? vowels.length : 0;

  // silent "e"
  if (word.endsWith("e")) {
    count--;
  }

  // minimal 1 syllable
  if (count <= 0) {
    count = 1;
  }

  return count;
};

const processSyllable = async (timestampData) => {
  const timestamps = timestampData.timestamps || [];

  let totalSyllables = 0;

  const updatedTimestamps = timestamps.map((item) => {
    const syllables = countSyllablesInWord(item.word);

    totalSyllables += syllables;

    return {
      ...item,
      syllables,
    };
  });

  return {
    ...timestampData,

    syllableReady: true,

    totalSyllables,

    timestamps: updatedTimestamps,
  };
};

module.exports = {
  processSyllable,
};