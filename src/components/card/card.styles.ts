import CardBody from '@material-ui/core/Card';
import styled from 'styled-components';
import React from 'react';
import { CardContent } from '@material-ui/core';

interface IStyledColProps {
  img: string;
}
const ColStyle = styled.div`
  background-image: url(${(props: IStyledColProps) => props.img});
  background-repeat: no-repeat;
  min-height: 460px;
`;
const StyledCardBody = styled(CardBody)`
  background-color: transparent;
  border: 0;
`;
const StyledCardContent = styled(CardContent)`
  border: 0;
`;

export { ColStyle, StyledCardBody, StyledCardContent };
