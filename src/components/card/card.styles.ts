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
  max-width: 300px;
  width: 100%;
`;
const StyledCardBody = styled.div``;
const StyledTitles = styled.h2`
  color: white;
  font-family: 'OswaldBold', sans-serif;
  font-weight: 700;
  margin-left: 7%;
`;
const StyledCategoryLink = styled.div`
  margin-top: 85%;
  margin-left: 7%;
`;

export { StyledCol, StyledCardBody, StyledTitles, StyledCategoryLink };
