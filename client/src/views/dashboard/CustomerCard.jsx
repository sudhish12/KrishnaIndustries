import React, { useEffect, useState } from 'react';
import './CustomerCard.css';
import { Grid } from '@mui/material';
import { FaUsersViewfinder } from "react-icons/fa6";
import axios from 'axios';
import config from '../../config';

const CustomerCard = () => {
  const [custTotal,setCustTotal] = useState([]);

  useEffect(()=>{
    axios.get(`${config.apiUrl}/customer/getCustomer`)
    .then((res)=>{
      setCustTotal(res.data)
    })
    .catch((err)=>{
      console.log("Customer Total is not fetched.")
    },[])
  })
  return (
    <div className="cust-card">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <h3 className="cust-card-heading text-white">Customers</h3>
        </Grid>
        <Grid item xs={4} className="icon-container">
          <FaUsersViewfinder className="cust-icon" />
        </Grid>
      </Grid>
      <h3 className="cust-value">{custTotal.length}</h3>
    </div>
  );
};

export default CustomerCard;
