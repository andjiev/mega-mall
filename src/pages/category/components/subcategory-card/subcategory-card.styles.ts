import styled from 'styled-components';
import { CardMedia } from '@material-ui/core';
import { Card as MaterialCard } from '@material-ui/core';

const StyledMaterialCard = styled(MaterialCard)`
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.24);
  margin: 0;
  padding: 0;
  min-height: 220px;
  max-height: 340px;
`;

const StyledCardMedia = styled(CardMedia)`
  background-size: auto;
  background-position: top;
  height: 100%;
  min-height: 240px;
  max-height: 200px;
`;

export { StyledCardMedia, StyledMaterialCard };
