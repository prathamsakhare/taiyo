// CountryDataChart.tsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
}

const fetchCountryData = async (country: string) => {
  const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
  return response.data as CountryData;
};

interface CountryDataChartProps {
  country: string;
}

const CountryDataChart: React.FC<CountryDataChartProps> = ({ country }) => {
  const { data, isLoading, isError } = useQuery(['countryData', country], () => fetchCountryData(country));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data for {country}</div>;
  }

  const { cases, deaths, recovered } = data as CountryData;

  const chartData = [
    { name: 'Cases', value: cases },
    { name: 'Deaths', value: deaths },
    { name: 'Recovered', value: recovered },
  ];

  return (
    <div className="bg-white p-4 rounded shadow ml-6 mt-5">
      <h2 className="text-2xl font-semibold">{country} COVID-19 Data</h2>
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

export default CountryDataChart;
