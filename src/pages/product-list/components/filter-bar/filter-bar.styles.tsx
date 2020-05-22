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
  background-color: ${(props: IStyledButton) => (props.isToggled ? props.theme.palette.secondary.main : 'white')};
`;

const StyledSelect = styled(NativeSelect)`
  width: 176px;
  height: 40px;
  border: 1px solid #0d1440;
  margin: 0 auto;
`;

export { StyledButton, StyledSelect };
