import styled from 'styled-components';

import { Box, List, Divider } from '@material-ui/core';

const StyledList = styled(List)`
  height: 150px;
  color: #ffffff;
`;

const StyledCopyright = styled(Box)`
  color: white;
`;

const StyledFooter = styled(Box)`
  background: #355c7c;
`;

const StyledDivider = styled(Divider)`
  height: 2px;
`;

export { StyledList, StyledFooter, StyledCopyright, StyledDivider };
