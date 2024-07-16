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

const admin_emp = {
  id: 'admin_emp',
  title: 'Employee',
  type: 'group',
  children: [
    {
      id: 'admin-emp',
      title: 'Employee Index',
      type: 'item',
      url: '/empIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    }
  ]
};

export default admin_emp;
