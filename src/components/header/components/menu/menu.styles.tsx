import React from 'react';
import styled from 'styled-components';

import { Box } from '@material-ui/core';

interface IStyledBoxProps {
  theme: any;
  isActive: boolean;
}
const StyledBox = styled(props => {
  const boxProps = { ...props };
  delete boxProps.isActive; // don't send custom properties to box component
  return <Box {...boxProps} />;
})`
  border-bottom: 2px solid transparent;
  transition: 0.3s;

  ${(props: IStyledBoxProps) => (props.isActive ? `border-bottom: 2px solid ${props.theme.palette.secondary.main}` : '')};

  &:hover,
  &:active {
    border-bottom: 2px solid ${(props: IStyledBoxProps) => props.theme.palette.secondary.main};
  }
`;

export { StyledBox };
