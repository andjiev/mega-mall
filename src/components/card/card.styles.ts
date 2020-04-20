import CardBody from '@material-ui/core/Card';
import styled from 'styled-components';
import React from 'react';
import { CardContent } from '@material-ui/core';

interface IStyledColProps {
  img: string;
}
const StyledCol = styled.div`
  background-image: url(${(props: IStyledColProps) => props.img});
  background-repeat: no-repeat;
  min-height: 460px;
`;
const StyledCardBody = styled.div`
  align-items: center;
  margin: 0 auto;
`;
const StyledTitles = styled.h2`
  color: white;
  padding-top: 4%;
  padding-left: 7%;
  font-family: OswaldBold;
`;
const StyledCategoryLink = styled.p`
  margin-top: 75%;
  margin-left: 7%;
`;

export { StyledCol, StyledCardBody, StyledTitles, StyledCategoryLink };
