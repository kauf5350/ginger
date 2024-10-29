"use client"

import { Bar, BarChart as Chart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface ChartProps {
  data: any[]
}

export function BarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <Chart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} />
      </Chart>
    </ResponsiveContainer>
  )
}

export function LineGraph({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="currentColor"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
} 