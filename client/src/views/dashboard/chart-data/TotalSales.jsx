// src/components/SalesPieChart.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register the required elements and plugins
Chart.register(ArcElement, Tooltip, Legend);

const SalesPieChart = () => {
  const [salesData, setSalesData] = useState(null);
  const [filterType, setFilterType] = useState('day'); // default filter

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/sales/totalSalesAmount`, {
          params: { filterType }
        });
        setSalesData(response.data.totalPurchaseAmount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filterType]);

  const data = {
    labels: ['Total Sales'],
    datasets: [
      {
        label: 'Sales',
        data: [salesData],
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Sales Data</h2>
      <div>
        <button onClick={() => setFilterType('day')}>Day</button>
        <button onClick={() => setFilterType('month')}>Month</button>
        <button onClick={() => setFilterType('year')}>Year</button>
      </div>
      {salesData !== null ? (
        <Pie data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SalesPieChart;
