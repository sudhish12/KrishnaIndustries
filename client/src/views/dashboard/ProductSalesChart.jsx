import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// apexcharts
import Chart from 'react-apexcharts';
import config from '../../config';
import MainCard from 'ui-component/cards/MainCard';
import { Grid, MenuItem, TextField } from '@mui/material';

// Utility function to generate random colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Utility function to generate gradient colors for each data point
const generateGradientColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(getRandomColor());
  }
  return colors;
};

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const CustPurchChart = ({ isLoading }) => {
  const theme = useTheme();
  const [cityData, setCityData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  useEffect(() => {
    axios
      .get(`${config.apiUrl}/customer/getCustomer`)
      .then((res) => {
        setCityData(res.data);
      })
      .catch((err) => {
        console.log('City data is not fetched.');
      });
  }, []);
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: []
      },
      yaxis: {
        title: {
          text: 'Total Sales'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [0, 50, 100]
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return  val + ' sales';
          }
        }
      }
    }
  });

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/product/dashboardForProSale/${selectedCity}`)
      .then((response) => {
        const salesByProduct = response.data.salesByProduct;

        const dynamicColors = generateGradientColors(salesByProduct.length);

        console.log('Chart Response :', response);

        setChartData((prevState) => ({
          ...prevState,
          series: [
            {
              name: 'Total Sales',
              data: salesByProduct.map((item) => item.totalSales)
            }
          ],
          options: {
            ...prevState.options,
            xaxis: {
              categories: salesByProduct.map((item) => item.pro_name)
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.25,
                gradientToColors: dynamicColors,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [0, 50, 100]
              }
            }
          }
        }));
      })
      .catch((error) => {
        console.error('Error fetching dashboard data:', error);
      });
  }, [selectedCity]);

  console.log('Selected City :', selectedCity);

  return (
    <div>
      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <MainCard>
          <Grid container spacing={3}>
            <Grid item xs={4} display="flex" justifyContent="start">
              <TextField select fullWidth label="select city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <MenuItem value="">Select All</MenuItem>
                {cityData.map((city) => (
                  <MenuItem key={city.cust_id} value={city.cust_city}>
                    {city.cust_city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </MainCard>
      )}
    </div>
  );
};

CustPurchChart.propTypes = {
  isLoading: PropTypes.bool
};

export default CustPurchChart;
