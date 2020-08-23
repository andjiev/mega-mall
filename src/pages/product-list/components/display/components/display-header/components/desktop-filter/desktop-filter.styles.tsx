import React from 'react';
import styled from 'styled-components';

import { Button, NativeSelect } from '@material-ui/core';

interface IStyledButton {
  isToggled: boolean;
  theme?: any;
}
const StyledButton = styled(props => {
  const btnProps = { ...props };
  delete btnProps.isToggled;
  return <Button {...props} />;
})`
  height: 40px;
  width: 111px;
  color: ${(props: IStyledButton) => (props.isToggled ? 'white' : 'black')};
  background-color: ${(props: IStyledButton) => (props.isToggled ? '#193364' : 'white')};
  border: 1px solid #193364;

  ${props => props.theme.breakpoints.down('sm')} {
    width: 100%;
  }
`;

const StyledSelect = styled(NativeSelect)`
  width: 176px;
  height: 40px;
  margin: 0 auto;
  text-decoration: none;
  border: none;

  &:hover {
    text-decoration: none;
  }
`;

export { StyledButton, StyledSelect };
