import { createMuiTheme } from '@material-ui/core/styles';

import './fonts';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['OswaldRegular', 'sans-serif'].join(',')
  }
});

export { theme };
