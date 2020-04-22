import styled from 'styled-components';

import { Box, Grid, List } from '@material-ui/core';

const StyledList = styled(List)`
  color: white;
`;

const StyledCopyright = styled(Grid)`
  color: #fefefe;
`;

const StyledFooter = styled(Box)`
  background: #252525;
`;

export { StyledList, StyledFooter, StyledCopyright };
