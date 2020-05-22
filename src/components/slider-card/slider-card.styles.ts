import styled from 'styled-components';
import { CardMedia, Box, Grid } from '@material-ui/core';
import { Card as MaterialCard } from '@material-ui/core';

const StyledMaterialCard = styled(MaterialCard)`
  height: 340px;
  width: 220px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 10%;
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
