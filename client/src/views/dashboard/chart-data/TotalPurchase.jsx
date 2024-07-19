// TotalPurchaseChart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#800080', '#808000', '#000080'];

const TotalPurchaseChart = () => {
  const [filter, setFilter] = useState('days');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {

    try {
      const response = await axios.get(`http://localhost:3030/cust_Purch/totalPurchaseAmount`, { params: { filter } });
      const chartData = response.data.map(item => {
        if (filter === 'days') {
          return {
            name: moment(item.date).format('DD MMM'),
            value: item.total_amount,
          };
        } else if (filter === 'months') {
          return {
            name: moment(item.month, 'M').format('MMMM'),
            value: item.total_amount,
          };
        } else if (filter === 'years') {
          return {
            name: item.year,
            value: item.total_amount,
          };
        }
        return item;
      });
      setData(chartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Total Purchase Amount ({filter})</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="filterSelect">Select Filter:</label>
        <select id="filterSelect" value={filter} onChange={handleFilterChange}>
          <option value="days">Days</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
      </div>
      <PieChart width={400} height={400}>

        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default TotalPurchaseChart;
