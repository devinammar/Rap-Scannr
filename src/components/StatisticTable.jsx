export const StatisticTable = ({ stats }) => {
  if (!stats) return null;

  const rows = [
    { metric: "Average SPS", value: stats.averageSPS },
    { metric: "Peak SPS", value: stats.peakSPS },
    { metric: "Total Syllables", value: stats.totalSyllables },
    { metric: "Total Words", value: stats.totalWords },
  ];

  return (
    <div className="w-full bg-grey/10 px-10 py-7 max-[560px]:px-8 max-[560px]:py-6 shadow-[inset_0_0_0_4px_var(--color-black)]">
      <p className="text-h3 font-medium text-black text-center mb-5">Statistic</p>
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-black">
            <th className="text-left text-p font-medium text-black pb-3">Metric</th>
            <th className="text-right text-p font-medium text-black pb-3">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-black/20">
              <td className="text-p text-black py-4">{row.metric}</td>
              <td className="text-p text-black py-4 text-right">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};