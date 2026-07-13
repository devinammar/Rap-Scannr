import { motion } from "framer-motion";
import {
  scrollProps,
  fadeIn,
  fadeRight,
  fadeLeft,
  zoomIn,
} from "../animations/scrollAnimations";
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
    <motion.div {...scrollProps} variants={zoomIn} className="w-full min-w-0 h-[400px] bg-grey/10 px-10 py-7 max-[560px]:px-8 max-[560px]:pl-4 shadow-[inset_0_0_0_4px_var(--color-black)]">
      <p className="text-h3 font-medium text-black text-center pl-4 mb-6">
        SPS Overtime
      </p>
      <div className="w-full min-w-0 h-[80%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis
              dataKey="time"
              label={{
                value: "Time (s)",
                position: "insideBottom",
                offset: -20,
              }}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              label={{
                value: "SPS",
                angle: -90,
                position: "insideLeft",
                offset: 20,
              }}
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
    </motion.div>
  );
};