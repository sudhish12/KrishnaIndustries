// import PropTypes from 'prop-types';

// // material-ui
// import { useTheme, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import config from '../../config';

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// // ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

// const EmpTodayRememberLeadsCount = ({ isLoading, total, icon, label }) => {
  // const theme = useTheme();
  // const [leadsCount,setLeadsCount] = useState([]);
  // const empId = sessionStorage.getItem('emp_id');
  // useEffect(()=>{
  //   axios.get(`${config.apiUrl}/leads/leadsCountForEmpDashboard/${empId}`)
  // .then((res)=>{
  //   setLeadsCount(res.data);
  // })
  // .catch((err)=>{
  //   console.log("Leads Data can't fetched.")
  // })
  // },[])

//   return (
//     <>
//       {isLoading ? (
//         <></>
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Box sx={{ p: 2 }}>
//             <List sx={{ py: 0 }}>
//               <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       ...theme.typography.commonAvatar,
//                       ...theme.typography.largeAvatar,
//                       bgcolor: 'warning.light',
//                       color: label === 'Meeting attends' ? 'error.dark' : 'warning.dark'
//                     }}
//                   >
//                     {icon}
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, mt: 0.45, mb: 0.45 }}
//                   primary={<Typography variant="h2">{leadsCount.reminder_date_count}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                        Today Remember Leads
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//     </>
//   );
// };

// EmpTodayRememberLeadsCount.propTypes = {
//   icon: PropTypes.object,
//   label: PropTypes.string,
//   total: PropTypes.number,
//   isLoading: PropTypes.bool
// };

// export default EmpTodayRememberLeadsCount;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Card, Typography, Box, Avatar } from '@mui/material';
import { FaUsers } from "react-icons/fa";
import MainCard from 'ui-component/cards/MainCard';
import config from '../../config';


const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

const EmpTodayRememberLeadsCount = () => {
  const theme = useTheme();
  const [leadsCount,setLeadsCount] = useState([]);
  const empId = sessionStorage.getItem('emp_id');
  useEffect(()=>{
    axios.get(`${config.apiUrl}/leads/leadsCountForEmpDashboard/${empId}`)
  .then((res)=>{
    setLeadsCount(res.data);
    
  })
  .catch((err)=>{
    console.log("Leads Data can't fetched.")
  })
  },[])
  return (
    <>
      <CardWrapper border={false} content={false}>
      <Box sx={{ p: 2 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main, height: 60, width: 60 }}>
            <FaUsers size={40} color='white'/>
          </Avatar>
        </Box>
        <Typography variant="h3" sx={{ textAlign: 'center', color: '#fff' }}>
          Total Remember Leads
        </Typography>
        <Typography variant="h1" sx={{ textAlign: 'center', color: '#fff' }}>
          {leadsCount.reminder_date_count}
        </Typography>
      </Box>
    </CardWrapper>
    </>
  )
}

export default EmpTodayRememberLeadsCount
