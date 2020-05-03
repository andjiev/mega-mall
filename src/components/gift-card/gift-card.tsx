import React from 'react';
import { StyledImage } from 'components/card/card.styles';
import { Card, Box, Typography, Hidden, Grid, CardMedia } from '@material-ui/core';
import { giftcards } from './gift-card.data';

interface GiftCardProps {
  id: number;
  url: string;
}
const GiftCard = (props: GiftCardProps) => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        <Grid item sm={6}>
          <Card>
            <StyledImage key={props.id} url={props.url}></StyledImage>
          </Card>
        </Grid>

        <Grid item sm={6}>
          <Card>
            <StyledImage key={props.id} url={props.url}></StyledImage>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default GiftCard;
