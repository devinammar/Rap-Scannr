const parseWhisperOutput = (output) => {
  const lines = output.split("\n");

  const segments = [];

  const regex =
    /\[(\d+):(\d+):([\d.]+)\s+-->\s+(\d+):(\d+):([\d.]+)\]\s+(.*)/;

  for (const line of lines) {
    const match = line.match(regex);

    if (!match) continue;

    const [
      ,
      sh,
      sm,
      ss,
      eh,
      em,
      es,
      text
    ] = match;

    const start =
      Number(sh) * 3600 +
      Number(sm) * 60 +
      Number(ss);

    const end =
      Number(eh) * 3600 +
      Number(em) * 60 +
      Number(es);

    segments.push({
      start,
      end,
      text: text
        .replace(/♪/g, "")
        .trim(),
    });
  }

  return segments;
};

module.exports = {
  parseWhisperOutput,
};