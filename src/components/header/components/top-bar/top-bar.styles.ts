import styled from 'styled-components';

import { Container, Typography } from '@material-ui/core';

const StyledImage = styled.img`
  background-image: url(/assets/images/header/facebook.svg);
  height: 20px;
  width: 20px;
  display: block;
  background-size: contain;
  border: none;
  background-repeat: no-repeat;
`;
const StyledTypography = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
`;

export { StyledImage, StyledTypography };
