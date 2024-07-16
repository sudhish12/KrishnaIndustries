// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const emp_cust = {
  id: 'emp_cust',
  title: 'Customers',
  type: 'group',
  children: [
    {
      id: 'emp-customer',
      title: 'Customer Index',
      type: 'item',
      url: '/custIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'emp-customer',
      title: 'Customer Purchase',
      type: 'item',
      url: '/custPurchIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    }
  ]
};

export default emp_cust;
