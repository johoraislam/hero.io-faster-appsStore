import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5 star", count: 10800 },
  { name: "4 star", count: 6400 },
  { name: "3 star", count: 2800 },
  { name: "2 star", count: 1800 },
  { name: "1 star", count: 900 },
];

const RatingChart = () => {
  return (
    <div className="">
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            layout="vertical" // HorizontalBarChart
            data={data}
          >
            {/* Background Grid Lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="#e0e0e0"
            />

            {/* X-Axis for the numbers */}
            <XAxis
              type="number"
              domain={[0, 12000]}
              ticks={[0, 3000, 6000, 9000, 12000]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#627382", fontSize: 12 }}
            />

            {/* Y-Axis for the star labels */}
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#627382", fontSize: 14 }}
              width={50}
            />

            <Tooltip cursor={{ fill: "transparent" }} />

            {/* The Actual Bars */}
            <Bar
              dataKey="count"
              fill="#ff8c00" // That specific orange color
              barSize={25}
              radius={[0, 4, 4, 0]} // Slightly rounded right corners
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="mt-8 border-[#e0e0e0]" />
    </div>
  );
};

export default RatingChart;
