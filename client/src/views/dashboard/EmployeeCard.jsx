import { Grid } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import React, { useEffect, useState } from 'react'
import { FaUsersViewfinder } from "react-icons/fa6";
import './EmpCard.css'

const EmployeeCard = () => {
  const [empTotal,setEmpTotal] = useState([]);
  useEffect(()=>{
    axios.get(`${config.apiUrl}/employee`)
    .then((res)=>{
      setEmpTotal(res.data);
    })
    .catch((err)=>{
      console.log("Employee Total is not fetched.")
    })
  },[])
  return (
    <>
       <div className="emp-card">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <h3 className="emp-card-heading text-white">Employees</h3>
        </Grid>
        <Grid item xs={4} className="icon-container">
          <FaUsersViewfinder className="emp-icon" />
        </Grid>
      </Grid>
      <h3 className="emp-value">{empTotal.length}</h3>
    </div>
    </>
  )
}

export default EmployeeCard



