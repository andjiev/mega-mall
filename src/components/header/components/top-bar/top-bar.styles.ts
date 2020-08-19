import styled from 'styled-components';

import { Typography } from '@material-ui/core';

const StyledTypography = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
`;

export { StyledTypography };
