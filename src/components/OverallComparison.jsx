import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const OverallComparison = ({ song1, song2 }) => {
  if (!song1 || !song2) return null;

  const data = [
    {
      metric: "Avg SPS",
      [song1.meta.title || "Song 1"]: song1.stats.averageSPS,
      [song2.meta.title || "Song 2"]: song2.stats.averageSPS,
    },
    {
      metric: "Peak SPS",
      [song1.meta.title || "Song 1"]: song1.stats.peakSPS,
      [song2.meta.title || "Song 2"]: song2.stats.peakSPS,
    },
  ];

  const title1 = song1.meta.title || "Song 1";
  const title2 = song2.meta.title || "Song 2";

  return (
    <div className="w-full bg-grey/20 px-10 py-7">
      <p className="text-h3 font-medium text-black text-center mb-6">
        Overall Comparison
      </p>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1D1D1D",
                border: "none",
                borderRadius: "0px",
                color: "#FBFBFB",
              }}
              itemStyle={{ color: "#FBFBFB" }}
            />
            <Legend />
            <Bar dataKey={title1} fill="#1D1D1D" />
            <Bar dataKey={title2} fill="#436092" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
