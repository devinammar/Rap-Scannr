const countSyllablesInWord = (word) => {
  word = word
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  if (!word) return 0;

  const vowels = word.match(/[aeiouy]+/g);

  let count = vowels ? vowels.length : 0;

  // silent e
  if (word.endsWith("e") && count > 1) {
    count--;
  }

  return Math.max(count, 1);
};

module.exports = {
  countSyllablesInWord,
};