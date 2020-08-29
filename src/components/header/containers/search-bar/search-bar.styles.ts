import styled from 'styled-components';

import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const StyledTextField = styled(TextField)`
  background-color: transparent;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #355c7c;
  flex-direction: column;
  justify-content: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: ${props => props.theme.palette.primary.main};
`;

export { StyledTextField, StyledSearchIcon };
