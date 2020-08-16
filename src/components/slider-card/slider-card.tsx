import React from 'react';

import { StyledMaterialCard, StyledCardMedia } from './slider-card.styles';
import { Card, Box, Typography, Hidden, Grid, CardMedia, makeStyles, Theme, createStyles, CardContent, Container } from '@material-ui/core';

interface CardProps {
  children?: React.ReactNode;
  title: string;
  url: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    }
  })
);

const SliderCard = (props: CardProps) => {
  const classes = useStyles();

  return (
    <StyledMaterialCard>
      <StyledCardMedia className={classes.media} image={props.url} />
      <CardContent>
        <Box>
          <Typography variant="body1">{props.title}</Typography>
        </Box>
        <Box>{props.children}</Box>
      </CardContent>
    </StyledMaterialCard>
  );
};

export default SliderCard;
