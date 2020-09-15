import React from 'react';
import styled from 'styled-components';

import { Button, NativeSelect, ButtonGroup } from '@material-ui/core';

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
  max-width: 111px;
  width: 100%;
  color: ${(props: IStyledButton) => (props.isToggled ? 'white' : '#193364')};
  background-color: ${(props: IStyledButton) => (props.isToggled ? '#193364' : 'white')};
  border: 1px solid #193364;
  transition: 0.3s;

  &:hover {
    background-color: ${(props: IStyledButton) => (props.isToggled ? '#385ea7' : '')};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledSelect = styled(NativeSelect)`
  width: 176px;
  height: 40px;
  margin: 0 auto;
  font-family: 'Roboto Regular', sans-serif;
  font-size: 14px;

  option {
    font-family: 'Roboto Regular', sans-serif;
  }
`;

const StyledButtonGroup = styled(ButtonGroup)`
  @media (max-width: 768px) {
    display: flex;
  }
`;

export { StyledButton, StyledSelect, StyledButtonGroup };
