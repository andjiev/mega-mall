import styled from 'styled-components';
import React from 'react';
import { CardContent, CardMedia } from '@material-ui/core';
import { Card as MaterialCard } from '@material-ui/core';
import { Box } from '@material-ui/core';

//Large Cards
interface IStyledImage {
  img: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IStyledImage) => props.img});
  background-size: cover;
  width: 100%;
  height: 550px;

  ${props => props.theme.breakpoints.down('md')} {
    height: 350px;
  }
`;

//Small cards styles

const StyledMaterialCard = styled(MaterialCard)`
  min-height: 340px;
  height: 100%;
  max-width: 220px;
  width: 100%;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.24);
  margin-top: 20%;
  margin-bottom: 20%;
  max-height: 340px;
`;

const StyledCardMedia = styled(CardMedia)`
  top: 0;
  background-size: auto;
  background-position: top;
  max-height: 261px;
  height: 100%;
  padding-top: 0px;
`;

export { StyledImage, StyledMaterialCard, StyledCardMedia };
