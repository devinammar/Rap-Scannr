const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

export const PeakSpeedInfo = ({ peakSPS, peakTime }) => {
  if (!peakSPS) return null;

  return (
    <div className="bg-grey/10 px-10 py-7 shadow-[inset_0_0_0_4px_var(--color-black)]">
      <p className="text-p font-medium text-black">
        Peak Speed: <span className="text-blue">{peakSPS} SPS</span> at{" "}
        <span className="text-blue">{formatTime(peakTime)}</span>
      </p>
    </div>
  );
};
