const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

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

    const basePath = audioPath.replace(".wav", "");
    const outputFile = `${basePath}.json`;

    const command = `"${whisper}" \
-m "${model}" \
-f "${audioPath}" \
--output-json \
--output-file "${basePath}"`;

    exec(command, { maxBuffer: 1024 * 1024 * 20 }, (err, stdout, stderr) => {
      if (err) {
        return reject(stderr || err.message);
      }

      console.log("WHISPER STDOUT:", stdout);
      console.log("WHISPER STDERR:", stderr);

      // ngecek file apakah ada
      if (!fs.existsSync(outputFile)) {
        return reject(new Error(`Whisper output not found: ${outputFile}`));
      }

      resolve(outputFile);
    });
  });
};

module.exports = {
  runWhisper,
};