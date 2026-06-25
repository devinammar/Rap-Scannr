const audioService = require("./audio.service");

const processAudio = async (req, res) => {
  try {
    const result = await audioService.processAudio(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  processAudio,
};