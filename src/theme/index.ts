import { createMuiTheme } from '@material-ui/core/styles';

// carousel style
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['OswaldRegular', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: '#0D1440',
      dark: '#0a1033'
    },
    secondary: {
      main: '#BF1736'
    },
    grey: {
      300: '#E1E1E1'
    }
  },
  overrides: {}
});

export { theme };
