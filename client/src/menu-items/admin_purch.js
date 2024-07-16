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

const admin_purch = {
  id: 'admin_purch',
  title: 'Purchase',
  type: 'group',
  children: [
    {
      id: 'admin-purch',
      title: 'Purchase Index',
      type: 'item',
      url: '/purchIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    }
  ]
};

export default admin_purch;
