const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require("path");
const { exec } = require("child_process");

const convertToMp3 = (wavPath) => {
  return new Promise((resolve, reject) => {
    const mp3Path = wavPath.replace(".wav", "_compressed.mp3");
    exec(`ffmpeg -i "${wavPath}" -q:a 5 "${mp3Path}" -y`, (err) => {
      if (err) return reject(err);
      resolve(mp3Path);
    });
  });
};

const runWhisper = async (audioPath) => {
  const apiKey = process.env.GROQ_API_KEY;

  // Convert WAV ke MP3 biar ukurannya kecil
  const mp3Path = await convertToMp3(audioPath);

  const form = new FormData();
  form.append("file", fs.createReadStream(mp3Path), {
    filename: path.basename(mp3Path),
    contentType: "audio/mpeg",
  });
  form.append("model", "whisper-large-v3-turbo");
  form.append("response_format", "verbose_json");
  form.append("language", "en");

  const response = await axios.post(
    "https://api.groq.com/openai/v1/audio/transcriptions",
    form,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        ...form.getHeaders(),
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    }
  );

  // Hapus MP3 setelah dipakai
  fs.unlinkSync(mp3Path);

  const basePath = audioPath.replace(".wav", "");
  const outputFile = `${basePath}.json`;

  const groqData = response.data;

  const whisperFormat = {
    transcription: (groqData.segments || []).map((seg) => ({
      text: seg.text,
      offsets: {
        from: Math.round(seg.start * 1000),
        to: Math.round(seg.end * 1000),
      },
    })),
  };

  fs.writeFileSync(outputFile, JSON.stringify(whisperFormat, null, 2));

  return outputFile;
};

module.exports = {
  runWhisper,
};