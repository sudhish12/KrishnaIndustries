import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EmployeeCard from './EmployeeCard';
import CustomertAmountDetailsCard from './CustomertAmountDetailsCard';
import CustomerCard from './CustomerCard';
import TodayFlwLeadsCount from './TodayFlwLeadsCount';
import TodayRememberLeadsCount from './TodayRememberLeadsCount';
import ProductSalesChart from './ProductSalesChart';
import TotalProfit from './chart-data/TotalProfitChart';
import TotalPurchaseAmount from './chart-data/TotalPurchase';
import TotalSalesPieChart from './chart-data/TotalSales';
import TodayAttendance from './EmpAttandanceCount';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const AdminDashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EmployeeCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <CustomerCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TodayFlwLeadsCount isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TodayRememberLeadsCount
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={8}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
            {/* <ProductSalesChart isLoading={isLoading} /> */}
            <TotalSalesPieChart/>
            </Grid>
            <Grid item xs={12}>
            {/* <ProductSalesChart isLoading={isLoading} /> */}
            <TotalPurchaseAmount/>
            </Grid>
          </Grid>
          </Grid>
          <Grid item xs={4}>
          {/* <CustomertAmountDetailsCard isLoading={isLoading} /> */}
          <TotalProfit/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;







{/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <ProductSalesChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomertAmountDetailsCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid> */}