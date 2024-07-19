import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Card, Typography, Box, Avatar } from '@mui/material';
import { FaUsers } from "react-icons/fa";
import MainCard from 'ui-component/cards/MainCard';
import config from '../../config';

// styles for the card wrapper
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

const EmpTodayFlwLeadsCount = () => {
  const theme = useTheme();
  const empId = sessionStorage.getItem('emp_id');
  const [leadsCount, setLeadsCount] = useState({ created_at_count: 0 });

  useEffect(() => {
    const fetchLeadsCount = async () => {
      try {
        const res = await axios.get(`${config.apiUrl}/leads/leadsCountForEmpDashboard/${empId}`);
        setLeadsCount(res.data);
      } catch (err) {
        console.error("Leads Data can't be fetched.");
      }
    };

    fetchLeadsCount();
  }, [empId]);

  useEffect(() => {
    axios.get(`${config.apiUrl}/employee/name/${empId}`)
      .then((res) => {
        setEmpData(res.data);
        console.log("Employee Data :", res.data);
      })
      .catch((err) => {
        console.log("Error, can't fetch employee data. Try again later.");
      });
  }, [empId]);
  return (
    <CardWrapper border={false} content={false}>
      <Box sx={{ p: 2 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar sx={{ bgcolor: theme.palette.warning.dark, height: 60, width: 60 }}>
            <FaUsers size={40} color='white'/>
          </Avatar>
        </Box>
        <Typography variant="h3" sx={{ textAlign: 'center', color: '#fff' }}>
          Total Follow Leads
        </Typography>
        <Typography variant="h1" sx={{ textAlign: 'center', color: '#fff' }}>
          {leadsCount.created_at_count}
        </Typography>
      </Box>
    </CardWrapper>
  );
}

export default EmpTodayFlwLeadsCount;
