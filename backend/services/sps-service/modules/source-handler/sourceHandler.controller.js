const sourceHandlerService =
  require("./sourceHandler.service");

const analyze = async (req, res) => {
  try {
    const result =
      await sourceHandlerService.analyze(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const compare = async (req, res) => {
  try {
    const result =
      await sourceHandlerService.compare(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  analyze,
  compare,
};