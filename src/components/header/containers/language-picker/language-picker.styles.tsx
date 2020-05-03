import React from 'react';
import styled from 'styled-components';

import { Box } from '@material-ui/core';

interface IStyledBoxProps {
  theme: any;
  isActive: boolean;
}
const StyledDisplay = styled(props => {
  const boxProps = { ...props };
  delete boxProps.isActive; // don't send custom properties to box component
  return <Box {...boxProps} />;
})`
  cursor: default;
  border-bottom: 2px solid transparent;
  transition: 0.3s;

  ${(props: IStyledBoxProps) => (props.isActive ? `border-bottom: 2px solid ${props.theme.palette.secondary.main}` : '')};
`;

const StyledPicker = styled(Box)`
  background-color: ${props => props.theme.palette.primary.dark};
  position: absolute;
  z-index: 1000;
  width: 100px;
  margin-top: 1px; // this is for showing the border-bottom of the StyledDiplay
`;

const StyledBox = styled(Box)`
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }
`;

const StyledImage = styled.img`
  width: 20px;
  height: 10px;
`;

export { StyledDisplay, StyledPicker, StyledImage, StyledBox };
