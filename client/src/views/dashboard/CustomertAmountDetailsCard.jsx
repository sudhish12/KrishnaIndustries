import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import config from '../../config';
import CustPurchChart from './CustPurchChart';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const CustomertAmountDetailsCard = ({ isLoading }) => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/cust_purch/custPurchDashboard`);
        setCustomerData(response.data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <CustPurchChart />
              </Grid>
              {customerData.map((customer, index) => (
                <Grid item xs={12} key={index}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            {customer.cust_name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                              <Typography variant="subtitle1" color="inherit">
                                {customer.total_amount}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  bgcolor: customer.balance_amount > 0 ? 'error.light' : 'success.light',
                                  color: customer.balance_amount > 0 ? 'error.dark' : 'success.dark',
                                  ml: 2
                                }}
                              >
                                {customer.balance_amount > 0 ? (
                                  <ChevronRightOutlinedIcon fontSize="small" color="inherit" />
                                ) : (
                                  <ChevronRightOutlinedIcon fontSize="small" color="inherit" />
                                )}
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: customer.balance_amount > 0 ? 'error.dark' : 'success.dark' }}
                      >
                        {customer.balance_amount > 0 ? 'Due' : 'Paid'} {customer.paid_amount} / Balance 
                        {customer.balance_amount}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

CustomertAmountDetailsCard.propTypes = {
  isLoading: PropTypes.bool
};

export default CustomertAmountDetailsCard;
