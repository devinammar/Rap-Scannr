const { exec } = require("child_process");
const path = require("path");

const runWhisper = (audioPath) => {
  return new Promise((resolve, reject) => {

    const whisper = path.join(
      __dirname,
      "../whisper.cpp/build/bin/whisper-cli"
    );

    const model = path.join(
      __dirname,
      "../whisper.cpp/models/ggml-base.en.bin"
    );

    const command = `"${whisper}" -m "${model}" -f "${audioPath}"`;

    exec(command, { maxBuffer: 1024 * 1024 * 20 }, (err, stdout, stderr) => {

      if (err) {
        return reject(stderr || err.message);
      }

      resolve(stdout);

    });

  });
};

module.exports = {
  runWhisper,
};