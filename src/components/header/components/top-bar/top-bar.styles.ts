import styled from 'styled-components';

import { Container, Typography } from '@material-ui/core';

const StyledImage = styled.img``;
const StyledTypography = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
`;

export { StyledImage, StyledTypography };
