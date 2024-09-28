"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// Custom Legend Component with Correct Typing
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end", // Align items to the right
        position: "absolute", // Position it absolutely
        top: 0, // Top right corner
        right: 0,
      }}
    >
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: entry.color,
              marginRight: "8px",
            }}
          />
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};



export default function PieCharts({data}) {
  const combinedData = [
    { name: "Total Sales", value: data.reduce((acc, item) => acc + item.sales, 0) },
    { name: "Total Revenue", value: data.reduce((acc, item) => acc + item.revenue, 0) },
  ];

  // Define colors for the pie chart slices
  const COLORS = ["#33A8FF", "#272E3F"];

  return (
    <ResponsiveContainer width={"100%"} height={500} className='bg-white rounded-lg shadow-lg py-4'>
      <PieChart>
        <Tooltip cursor={{ fill: "hsl(var(--muted))" }} />
        <Legend content={renderLegend} verticalAlign="top" align="left" />
        <Pie
          data={combinedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius={100} // This creates the donut effect
          paddingAngle={2}
        >
          {combinedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
