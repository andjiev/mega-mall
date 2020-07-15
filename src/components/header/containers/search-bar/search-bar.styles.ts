import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

import { TextField, Button } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  background-color: transparent;
  min-height: 50px;
  border-radius: 5px;
  border: 1px solid #355c7c;
`;

const StyledButton = styled(Button)`
  width: 80px;
  height: 50px;
  border-radius: 0;
  border: 2px solid black;
  z-index: 999;
  display: block;
`;

export { StyledTextField, StyledButton };
