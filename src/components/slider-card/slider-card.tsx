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
        <Box fontWeight="fontWeightBold" fontFamily="RobotoRegular" fontSize="16px">
          <Typography>{props.title}</Typography>
        </Box>
        <Box fontWeight="fontWeightBold" fontFamily="OswaldMedium" fontSize="24px">
          <Typography variant="h5">{props.children}</Typography>
        </Box>
      </CardContent>
    </StyledMaterialCard>
  );
};

export default SliderCard;
