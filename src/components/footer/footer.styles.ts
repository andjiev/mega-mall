import styled from 'styled-components';

import { Box, List } from '@material-ui/core';

const StyledList = styled(List)`
  height: 150px;
  color: #ffffff;
`;

const StyledCopyright = styled(Box)`
  color: #fefefe;
`;

const StyledFooter = styled(Box)`
  background: #252525;
`;

export { StyledList, StyledFooter, StyledCopyright };
