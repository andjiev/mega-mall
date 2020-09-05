import styled from 'styled-components';
import { CardMedia } from '@material-ui/core';
import { Card as MaterialCard } from '@material-ui/core';

const StyledMaterialCard = styled(MaterialCard)`
  height: 100%;
  width: 100%;
  padding: 0;
  min-height: 250px;
  max-height: 380px;
  cursor: pointer;

  ${props => props.theme.breakpoints.down('lg')} {
    height: 100%;
    min-height: 220px;
    max-height: 340px;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  background-size: contain;
  background-position: top;
  height: 100%;
  min-height: 280px;
  max-height: 300px;
  margin-top: 10px;
  & media {
    width: 85%;
  }
  & img {
    objectfit: scale-down;
  }
  ${props => props.theme.breakpoints.down('lg')} {
    height: 100%;
    min-height: 240px;
    max-height: 240px;
  }
`;

export { StyledCardMedia, StyledMaterialCard };
