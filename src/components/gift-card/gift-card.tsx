import React from 'react';
import { StyledImage } from 'components/card/card.styles';
import { Card, Box, Typography, Hidden, Grid, CardMedia } from '@material-ui/core';

interface GiftCardProps {}

const GiftCard = (props: GiftCardProps) => {
  return (
    <>
      <Card raised>
        <CardMedia>
          <StyledImage></StyledImage>
        </CardMedia>
      </Card>
    </>
  );
};

export default GiftCard;
