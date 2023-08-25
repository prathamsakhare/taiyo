// WorldDataChart.tsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fetchWorldData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  return response.data;
};

const WorldDataChart: React.FC = () => {
  const { data, isLoading, isError } = useQuery('worldData', fetchWorldData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const { cases, deaths, recovered } = data;

  const chartData = [
    { name: 'Cases', value: cases },
    { name: 'Deaths', value: deaths },
    { name: 'Recovered', value: recovered },
  ];

  return (
    <div className="bg-white p-4 rounded shadow w-[80%] ml-6">
      <h2 className="text-2xl font-semibold">Worldwide COVID-19 Data</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorldDataChart;
