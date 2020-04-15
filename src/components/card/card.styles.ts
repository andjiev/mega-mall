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
const StyledCardBody = styled.div`
  align-items: center;
  margin: 0 auto;
`;
const StyledCardContent = styled.div`
  border: 0;
`;
const TitlesStyle = styled.h2`
  color: white;
  margin-top: 10%;
  padding-top: 4%;
  padding-left: 4%;
`;
const CategoryLinkStyle = styled.p`
  margin-top: 75%;
  margin-left: 4%;
`;

export { ColStyle, StyledCardBody, StyledCardContent, TitlesStyle, CategoryLinkStyle };
