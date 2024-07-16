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

const emp_leads = {
  id: 'emp_leads',
  title: 'Leads',
  type: 'group',
  children: [
    {
      id: 'emp-leads',
      title: 'Leads Index',
      type: 'item',
      url: '/leadsIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
        id: 'emp-leads',
        title: 'Following Leads Index',
        type: 'item',
        url: '/flwLeadsIndex',
        icon: icons.IconTypography,
        breadcrumbs: false
      }
  ]
};

export default emp_leads;
