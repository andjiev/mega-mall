import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

import { TextField, Button } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  background-color: #fff;
  height: 50px;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  width: 80px;
  height: 50px;
  border-radius: 0;
`;

export { StyledTextField, StyledButton };
