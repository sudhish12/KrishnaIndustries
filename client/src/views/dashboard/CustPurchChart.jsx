import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chart from 'react-apexcharts';
import config from '../../config';
import moment from 'moment';
import { TextField } from '@mui/material';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const CustPurchChart = () => {
  const theme = useTheme();
  const [currentDate,setCurrentDate] = useState(moment().format("YYYY-MM-DD"))
  const orangeDark = theme.palette.secondary[800];

  const customization = useSelector((state) => state.customization);
  const { navType } = customization;

  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        id: 'support-chart',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: true // Ensure this is true to show the x-axis label
        },
        y: {
          formatter: (value, { seriesIndex, dataPointIndex, w }) => {
            return `Total ${value}`;
          },
          title: {
            formatter: (seriesName, { seriesIndex, dataPointIndex, w }) => {
              return w.config.xaxis.categories[dataPointIndex];
            }
          }
        },
        marker: {
          show: false
        }
      },
      xaxis: {
        categories: []
      }
    }
  });

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    axios.get(`${config.apiUrl}/cust_purch/custPurchDashboard/?date=${currentDate}`)
      .then(response => {
        const data = response.data;
        const names = data.map(item => item.cust_name);
        const totalAmounts = data.map(item => parseFloat(item.total_amount));
        const total = totalAmounts.reduce((acc, curr) => acc + curr, 0);

        setTotalAmount(total);

        setChartData(prevState => ({
          ...prevState,
          series: [{
            name: 'Total Amount',
            data: totalAmounts
          }],
          options: {
            ...prevState.options,
            xaxis: {
              categories: names
            },
            colors: [orangeDark],
            tooltip: {
              theme: 'light',
              y: {
                formatter: (value) => `Total ${value}`,
                title: {
                  formatter: (seriesName, { seriesIndex, dataPointIndex, w }) => {
                    return w.config.xaxis.categories[dataPointIndex];
                  }
                }
              }
            }
          }
        }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [orangeDark]);

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: { theme: 'light' }
    };
    ApexCharts.exec('support-chart', 'updateOptions', newSupportChart);
  }, [navType, orangeDark, chartData.options]);

  return (
    <>
    <Card sx={{ bgcolor: 'secondary.light' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        {/* <Grid item xs={12} display='flex' justifyContent='end'>
          <TextField
          label = "Date"
          value={currentDate}
          onChange={(e)=>setCurrentDate(e.target.value)}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: 'secondary.dark' }}>
                Total Amount
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: 'grey.800' }}>
                {totalAmount.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={205}
      />
    </Card>
    </>
  );
};

export default CustPurchChart;
