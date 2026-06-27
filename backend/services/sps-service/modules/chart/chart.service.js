const generateChart = async (spsData) => {
  const timeline = spsData.spsTimeline || [];

  const chartData = timeline.map((point) => ({
    time: point.time,
    sps: point.sps,
  }));

  return {
    ...spsData,

    chartReady: true,

    chartData,
  };
};

module.exports = {
  generateChart,
};