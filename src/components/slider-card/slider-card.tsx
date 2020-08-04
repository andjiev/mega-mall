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
          <Typography variant="subtitle2">{props.title}</Typography>
        </Box>
        <Box fontWeight="fontWeightBold" fontFamily="OswaldMedium" fontSize="24px">
          <Typography variant="h3">{props.children}</Typography>
          {/*TODO h3 for now is 22px and this needs to be 24px as in the design and the weight is regular at 400 value it needs to be Medium ... */}
        </Box>
      </CardContent>
    </StyledMaterialCard>
  );
};

export default SliderCard;
