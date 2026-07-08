const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

export const PeakSpeedInfo = ({ peakSPS, peakTime }) => {
  if (!peakSPS) return null;

  return (
    <div className="bg-grey/20 px-10 py-7">
      <p className="text-p font-medium text-black">
        Peak Speed: {peakSPS} SPS at {formatTime(peakTime)}
      </p>
    </div>
  );
};