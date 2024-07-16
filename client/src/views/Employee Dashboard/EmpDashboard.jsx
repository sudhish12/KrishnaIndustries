// import { Grid } from '@mui/material'
// import EmpEntry from 'components/Employee Panel/Employee Attendance/Employee Entry/EmpEntry'
// import EmpExit from 'components/Employee Panel/Employee Attendance/Employee Exit/EmpExit'
// import React, { useEffect, useState } from 'react'
// import { gridSpacing } from 'store/constant'
// import EmpTodayFlwLeadsCount from './EmpTodayFlwLeadsCount'
// import EmpTodayRememberLeadsCount from './EmpTodayRememberLeadsCount'
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
// import EmpAttendanceChart from './EmpAttendanceChart'

// const EmpDashboard = () => {
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//   }, [])
//   return (
//     <div>
//       <Grid container spacing={gridSpacing}>
//       <Grid item lg={4} md={6} sm={6} xs={12}>
//         <EmpEntry/>
//         </Grid>
//       <Grid item lg={4} md={6} sm={6} xs={12}>
//         <EmpExit/>
//         </Grid>
//         <Grid item lg={4} md={12} sm={12} xs={12}>
//             <Grid container spacing={gridSpacing}>
//               <Grid item sm={6} xs={12} md={6} lg={12}>
//                 <EmpTodayFlwLeadsCount isLoading={isLoading} />
//               </Grid>
//               <Grid item sm={6} xs={12} md={6} lg={12}>
//                 <EmpTodayRememberLeadsCount
//                   {...{
//                     icon: <StorefrontTwoToneIcon fontSize="inherit" />
//                   }}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={12}>
//         <Grid container spacing={gridSpacing}>
//           <Grid item xs={12} md={8}>
//             <EmpAttendanceChart isLoading={isLoading} />
//           </Grid>
//           {/* <Grid item xs={12} md={4}>
//             <CustomertAmountDetailsCard isLoading={isLoading} />
//           </Grid> */}
//         </Grid>
//       </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default EmpDashboard


import React from 'react';
import { Grid } from '@mui/material';
import EmpAttendanceChart from './EmpAttendanceChart' // Import your chart component
import { gridSpacing } from 'store/constant';
import EmpEntry from 'components/Employee Panel/Employee Attendance/Employee Entry/EmpEntry';
import EmpExit from 'components/Employee Panel/Employee Attendance/Employee Exit/EmpExit';
import EmpTodayFlwLeadsCount from './EmpTodayFlwLeadsCount';
import EmpTodayRememberLeadsCount from './EmpTodayRememberLeadsCount';
import EmpCustCard from './EmpCustCard';

const EmpDashboard = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EmpCustCard />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EmpEntry />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EmpExit />
        </Grid>
        <Grid item container lg={8} md={12} sm={12} xs={12} spacing={gridSpacing}>
          <Grid item xs={12}>
            <EmpAttendanceChart />
          </Grid>
        </Grid>
        <Grid item container lg={4} md={12} sm={12} xs={12} spacing={gridSpacing}>
          <Grid item xs={12}>
            <EmpTodayFlwLeadsCount />
          </Grid>
          <Grid item xs={12} >
          <EmpTodayRememberLeadsCount />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default EmpDashboard;

