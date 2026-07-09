import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const SPSOverTimeChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full h-[400px] bg-grey/20 px-10 py-7">
      <p className="text-h3 font-medium text-black text-center mb-6">
        SPS Overtime
      </p>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis
            dataKey="time"
            label={{ value: "Time (s)", position: "insideBottom", offset: -5 }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            label={{ value: "SPS", angle: -90, position: "insideLeft" }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1D1D1D",
              border: "none",
              borderRadius: "0px",
              color: "#FBFBFB",
            }}
            itemStyle={{ color: "#FBFBFB" }}
            formatter={(value) => [`${value} SPS`, "Speed"]}
            labelFormatter={(label) => `Time: ${label}s`}
          />
          <Line
            type="monotone"
            dataKey="sps"
            stroke="#436092"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
