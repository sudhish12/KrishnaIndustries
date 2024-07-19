import { Grid } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import React, { useEffect, useState } from 'react'
import { FaUsersViewfinder } from "react-icons/fa6";
import './EmpCard.css'

const EmployeeCard = () => {
  const [empTotal,setEmpTotal] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    axios.get(`${config.apiUrl}/employee`)
    .then((res)=>{
      setEmpTotal(res.data);
    })
    .catch((err)=>{
      console.log("Employee Total is not fetched.")
    })



  },[]) 

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/emp_attend/todayAttendance`);
       console.log(response.data)
        const { attendance } = response.data;
          setAttendance(attendance);
          setTotalCount(attendance.length); // Setting total count based on the fetched data
          setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p> Error :{error}</p>;
  }

  return (
    <> 
    <div>
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
    <div>
    <h2>Today's Attendance</h2>
    <p>Total Attendance Count: {totalCount}</p>
   
    </div>
    </div>
     
 
    </>
  )
}

export default EmployeeCard



