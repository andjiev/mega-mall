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
      fontSize: '72px'
    },
    h2: {
      fontFamily: ['OswaldBold', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '40px'
    },
    h3: {
      fontFamily: ['OswaldRegular', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '22px'
    },
    h4: {
      fontFamily: ['OswaldMedium', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '18px'
    },
    h5: {
      fontFamily: ['OswaldRegular', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '16px'
    },
    h6: {
      fontFamily: ['OswaldRegular', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '14px'
    },
    subtitle1: {
      fontFamily: ['RobotoMedium', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '18px'
    }, // subtitle 1 is for the links with in the cards. . .
    subtitle2: {
      fontFamily: ['RobotoRegular', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '16px'
    }, //for the titles in the card-slider and category grid . . .
    body1: {
      fontFamily: ['RobotoRegular', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '14px'
    },
    body2: {
      fontFamily: ['RobotoThin', 'sans-serif'].join(','),
      fontWeight: 200,
      fontSize: '14px'
    } //for the footer text
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
