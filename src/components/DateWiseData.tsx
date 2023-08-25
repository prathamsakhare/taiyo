// HistoricalDataChart.tsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

const fetchHistoricalData = async () => {
  const response = await axios.get(
    'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
  );
  return response.data.timeline as HistoricalData;
};

const HistoricalDataChart: React.FC = () => {
  const { data, isLoading, isError } = useQuery<HistoricalData>(
    'historicalData',
    fetchHistoricalData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error fetching historical data</div>;
  }

  const { cases, deaths, recovered } = data;

  const chartData = Object.keys(cases).map((date) => ({
    date,
    Cases: cases[date],
    Deaths: deaths[date],
    Recovered: recovered[date],
  }));

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold">Historical COVID-19 Data</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
          <Line type="monotone" dataKey="Deaths" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Recovered" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalDataChart;
