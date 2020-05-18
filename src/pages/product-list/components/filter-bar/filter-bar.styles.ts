import styled from 'styled-components';

import { Box, Button, NativeSelect, Select, InputLabel } from '@material-ui/core';

const StyledButton = styled(Button)`
  height: 40px;
  width: 111px;
  color: black;
`;
const StyledSelect = styled(NativeSelect)`
  width: 176px;
  height: 40px;
  border: 1px solid #0d1440;
  margin: 0 auto;
`;

export { StyledButton, StyledSelect };
