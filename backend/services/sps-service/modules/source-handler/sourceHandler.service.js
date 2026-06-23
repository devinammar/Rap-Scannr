const analyze = async (data) => {
  return {
    success: true,
    service: "sps-service",
    action: "analyze",
    receivedData: data,
  };
};

const compare = async (data) => {
  return {
    success: true,
    service: "sps-service",
    action: "compare",
    receivedData: data,
  };
};

module.exports = {
  analyze,
  compare,
};