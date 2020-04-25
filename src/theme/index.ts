import { createMuiTheme } from '@material-ui/core/styles';

import './fonts';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['OswaldRegular', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: '#0D1440'
    },
    secondary: {
      main: '#BF1736'
    }
  },
  overrides: {}
});

export { theme };
