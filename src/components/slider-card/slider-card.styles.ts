import styled from 'styled-components';
import { CardMedia, Box, Grid } from '@material-ui/core';
import { Card as MaterialCard } from '@material-ui/core';

const StyledMaterialCard = styled(MaterialCard)`
  height: 350px;
  width: 100%;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.24);
  margin: 5px;
`;

const StyledCardMedia = styled(CardMedia)`
  top: 0;
  background-size: auto;
  background-position: top;
  max-height: 261px;
  height: 100%;
  padding-top: 0px;
`;

export { StyledMaterialCard, StyledCardMedia };
