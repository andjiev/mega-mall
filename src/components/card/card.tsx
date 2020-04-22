import React from 'react';

import { StyledImage } from 'components/card/card.styles';
import { Card, Box, Typography, Hidden, Grid, CardMedia } from '@material-ui/core';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  title: string;
  img: string;
}

const _Card = (props: CardProps) => {
  if (props.size == 'small') {
    return <> </>;
  } else if (props.size == 'medium') {
    return <> </>;
  }

  return (
    <>
      <Card raised>
        <CardMedia>
          <StyledImage img={props.img}>
            <Box p={3}>
              <Typography component="div">
                <Box fontWeight="fontWeightBold" color="white">
                  <Typography variant="h3">{props.title}</Typography>
                </Box>
              </Typography>
              {/* TODO: find a way to move the whole content at the bottom (Grid container flex or something) */}
              <Box pt={33}>
                {props.children}
                <Box mt={3}>
                  <Typography component="div">
                    <Box color="white" component="span">
                      прикажи ги сите {' >'}
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledImage>
        </CardMedia>
      </Card>
    </>
  );
};

_Card.defaultProps = {
  size: 'small'
};

export default _Card;
