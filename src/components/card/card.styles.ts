import styled from 'styled-components';
import { CardMedia, Box, Grid, Typography } from '@material-ui/core';
import { Card as MaterialCard } from '@material-ui/core';

//Large Cards
interface IStyledImage {
  url?: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IStyledImage) => props.url});
  background-size: cover;
  width: 100%;
  height: 550px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${props => props.theme.breakpoints.down('md')} {
    height: 350px;
  }
`;

//Small cards styles

const StyledMaterialCard = styled(MaterialCard)`
  min-height: 340px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 768px) {
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const StyledCardMedia = styled(CardMedia)`
  top: 0;
  background-size: contain;
  background-position: top;
  max-height: 238px;
  height: 100%;
  padding-top: 0px;
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

//Medium cards styles

interface IGiftCardImage {
  url?: string;
}
const GiftCardImage = styled(Box)`
  background-image: url(${(props: IGiftCardImage) => props.url});
  background-size: cover;
  width: 100%;
  height: 320px;

  ${props => props.theme.breakpoints.down('md')} {
    height: 200px;
  }
`;

export { StyledGrid, StyledImage, StyledMaterialCard, StyledCardMedia, GiftCardImage };
