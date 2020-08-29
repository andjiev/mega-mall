import { createMuiTheme } from '@material-ui/core/styles';

// carousel style
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// slider style
import 'react-multi-carousel/lib/styles.css';

import './index.css';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // fontFamily: ['OswaldRegular', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['OswaldBold', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '48px'
    },
    h2: {
      fontFamily: ['OswaldBold', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '40px'
    },
    h3: {
      fontFamily: ['OswaldMedium', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '36px'
    },
    h4: {
      fontFamily: ['OswaldMedium', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '24px'
    },
    h5: {
      fontFamily: ['OswaldRegular ', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '22px'
    },
    h6: {
      fontFamily: ['OswaldMedium', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '18px'
    },
    subtitle1: {
      fontFamily: ['RobotoMedium ', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '18px'
    },
    subtitle2: {
      fontFamily: ['OswaldRegular ', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '14px'
    },
    body1: {
      fontFamily: ['RobotoRegular ', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '16px'
    },
    body2: {
      fontFamily: ['RobotoRegular ', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '14px'
    },
    button: {
      fontFamily: ['RobotoRegular ', 'sans-serif'].join(','),
      fontSize: '14px',
      textTransform: 'uppercase'
    }
  },
  palette: {
    primary: {
      main: '#193364',
      dark: '#0D1440',
      contrastText: '#fff'
    },
    secondary: {
      main: '#FDBC00'
    },
    grey: {
      300: '#E1E1E1'
    }
  },
  overrides: {}
});

export { theme };
