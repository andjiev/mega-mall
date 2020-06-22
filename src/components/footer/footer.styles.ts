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

const StyledImage = styled.img`
  height: 47px;
  width: 68px;
`;

export { StyledList, StyledFooter, StyledCopyright, StyledDivider, StyledImage };
