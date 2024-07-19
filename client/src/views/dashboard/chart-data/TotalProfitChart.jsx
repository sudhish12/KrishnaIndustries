import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const ProfitChart = () => {
    const [profitData, setProfitData] = useState([]);
    const [filter, setFilter] = useState('days');

    useEffect(() => {
        fetchProfitData();
    }, [filter]);

    const fetchProfitData = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/profit`, {
                params: { filter }
            });

            // Ensure the response data is an array
            const data = Array.isArray(response.data) ? response.data : [];
            setProfitData(data);
        } catch (error) {
            console.error("Error fetching profit data:", error);
        }
    };

    const chartData = {
        labels: Array.isArray(profitData) ? profitData.map(item => {
            if (filter === 'days') return moment(item.date).format('YYYY-MM-DD');
            if (filter === 'months') return `Month ${item.month}`;
            if (filter === 'years') return `Year ${item.year}`;
            return '';
        }) : [],
        datasets: [
            {
                label: 'Profit',
                data: Array.isArray(profitData) ? profitData.map(item => item.profit) : [],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            }
        ]
    };

    const chartOptions = {
        scales: {
            x: { title: { display: true, text: 'Time' } },
            y: { title: { display: true, text: 'Profit' } }
        }
    };

    return (
        <div>
            <h2>Profit Chart</h2>
            <div>
                <label>
                    Filter:
                    <select value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="days">Days</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select>
                </label>
            </div>
            {Array.isArray(profitData) && profitData.length > 0 ? (
                <Line data={chartData} options={chartOptions} />
            ) : (
                <p>No data available for the selected filter.</p>
            )}
        </div>
    );
};

export default ProfitChart;
