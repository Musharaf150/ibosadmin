"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

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
        alignItems: "flex-end", 
        position: "absolute", 
        top: 0, 
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


export default function LineCharts({data}) {
  return (
    <ResponsiveContainer width={"100%"} height={500} className='bg-white rounded-lg shadow-lg py-4'>
      <LineChart data={data}>
        <defs>
          <filter id="shadow" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
            <feOffset in="blur" dx="5" dy="12" result="offsetBlur"/>
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={9}
          tickFormatter={(value) => `PKR ${value}`}
        />
        <Tooltip cursor={{ fill: "hsl(var(--muted))" }} />
        <Legend content={renderLegend} verticalAlign="top" align="right" />
        <CartesianGrid strokeDasharray="2 2" stroke="#e0e0e0" />
        <Line
          type="monotone"
          dataKey={"sales"}
          stroke="#33A8FF"
          strokeWidth={3}
          dot={{ r: 3 }}
          filter="url(#shadow)"
        />
        <Line
          type="monotone"
          dataKey={"revenue"}
          stroke="#272E3F"
          strokeWidth={3}
          dot={{ r: 3 }}
          filter="url(#shadow)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
