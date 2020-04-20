import CardBody from '@material-ui/core/Card';
import styled from 'styled-components';
import React from 'react';
import { CardContent } from '@material-ui/core';
import { Card as MaterialCard } from '@material-ui/core';

//Large cards styles
interface IStyledColProps {
  img: string;
}
const ColStyle = styled.div`
  background-image: url(${(props: IStyledColProps) => props.img});
  background-repeat: no-repeat;
  min-height: 460px;
  max-width: 300px;
  width: 100%;
`;
const StyledCardBody = styled.div`
  align-items: center;
  margin: 0 auto;
`;
const TitlesStyle = styled.h2`
  color: white;
  margin-top: 4%;
  margin-left: 7%;
`;
const CategoryLinkStyle = styled.p`
  margin-top: 75%;
  margin-left: 7%;
`;

//Small cards styles

const StyledMaterialCard = styled(MaterialCard)`
  min-height: 340px;
  height: 100%;
  max-width: 200px;
  width: 100%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.24);
  border: 1px solid black;
`;

const StyledMaterialCardTitle = styled.h6``;

const StyledMaterialCardPrice = styled.h4``;

export { ColStyle, StyledCardBody, TitlesStyle, CategoryLinkStyle, StyledMaterialCard, StyledMaterialCardTitle, StyledMaterialCardPrice };
