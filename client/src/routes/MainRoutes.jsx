import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const Login = Loadable(lazy(() => import('views/pages/authentication3/Login')));

// dashboard routing
const AdminDashboard = Loadable(lazy(() => import('views/dashboard/AdminDashboard')));

const EmployeeIndex = Loadable(lazy(() => import('components/Admin Panel/Employee/EmployeeIndex')));
const LeadsIndex = Loadable(lazy(() => import('components/Admin Panel/Leads/LeadsIndex')));
const EmpFollowLeadsIndex = Loadable(lazy(() => import('components/Admin Panel/Employee Following Leads/EmpFollowLeadsIndex')));
const PurchaseIndex = Loadable(lazy(() => import('components/Admin Panel/Purchase/PurchaseIndex')));
const ProductIndex = Loadable(lazy(() => import('components/Admin Panel/Product/ProductIndex')));
const SpecificationIndex = Loadable(lazy(() => import('components/Admin Panel/Product/Specification/SpecificationIndex')));
const SalesIndex = Loadable(lazy(() => import('components/Admin Panel/Sales/SalesIndex')));
const AdminCustomerIndex = Loadable(lazy(() => import('components/Admin Panel/Customer/AdminCustomerIndex')));
const AdminCustPurchIndex = Loadable(lazy(() => import('components/Admin Panel/Admin Customer Purchase/AdminCustPurchIndex')));


// Employee
const EmpLeadsIndex = Loadable(lazy(() => import('components/Employee Panel/Employee Leads/EmpLeadsIndex')));
const FollowingLeadsIndex = Loadable(lazy(() => import('components/Employee Panel/Following Leads/FollowingLeadsIndex')));
const CustomerIndex = Loadable(lazy(() => import('components/Employee Panel/Customer/CustomerIndex')));
const CustPurchIndex = Loadable(lazy(() => import('components/Employee Panel/Customer Purchase/CustPurchIndex')));
const EmpDashboard = Loadable(lazy(() => import('views/Employee Dashboard/EmpDashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = sessionStorage.getItem("adminLoggedIn") ? {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <AdminDashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'admin',
          element: <AdminDashboard />
        }
      ]
    },
    {
      path: 'empIndex',
      element: <EmployeeIndex />
    },
    {
      path: 'leadsIndex',
      element: <LeadsIndex />
    },
    {
      path: 'flwLeadsIndex',
      element: <EmpFollowLeadsIndex />
    },
    {
      path: 'purchIndex',
      element: <PurchaseIndex />
    },
    {
      path: 'proIndex',
      element: <ProductIndex />
    },
    {
      path: 'specIndex/:pro_id',
      element: <SpecificationIndex />
    },
    {
      path: 'salesIndex',
      element: <SalesIndex />
    },
    {
      path: 'custIndex',
      element: <AdminCustomerIndex />
    },
    {
      path: 'custPurchIndex',
      element: <AdminCustPurchIndex />
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        },
        {
          path: 'util-color',
          element: <UtilsColor />
        },
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
} : (sessionStorage.getItem("employeeLoggedIn") ? {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <EmpDashboard />
    },
    {
      path: '/dashboard',
      element: <EmpDashboard />
    },
    {
      path: '/leadsIndex',
      element: <EmpLeadsIndex/>
    },
    {
      path: '/flwLeadsIndex',
      element: <FollowingLeadsIndex/>
    },
    {
      path: 'custIndex',
      element: <CustomerIndex />
    },
    {
      path: 'custPurchIndex',
      element: <CustPurchIndex />
    },
  ]
} : {
  path: '/',
  element: <Login />
});


export default MainRoutes;
