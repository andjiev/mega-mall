import styled from 'styled-components';

import { Box } from '@material-ui/core';

interface IStyledImage {
  url: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IStyledImage) => props.url});
  width: 100%;
  height: 320px;

  ${props => props.theme.breakpoints.down('md')} {
    height: 200px;
  }
`;

export { StyledImage };
