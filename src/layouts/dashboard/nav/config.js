// component
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Students',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Teachers',
    path: '/dashboard/teacher',
    icon: icon('ic_user'),
  },
  {
    title: 'courses',
    path: '/dashboard/cours',
    icon: icon('ic_blog'),
  },
  {
    title: 'formation',
    path: '/formation',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
