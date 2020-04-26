import React from 'react';

import { StyledImage, StyledGrid } from 'components/card/card.styles';
import { Card, Box, Typography, Hidden, Grid, CardMedia } from '@material-ui/core';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
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
            <StyledGrid container direction="column">
              <Grid item xs>
                <Box p={3} pt={2}>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" color="white">
                      <Typography variant="h3">{props.title}</Typography>
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid container item xs direction="column" justify="flex-end">
                <Box p={3}>
                  <Hidden mdDown>
                    {props.children}
                    <Box mt={3}>
                      <Box color="white" component="span">
                        прикажи ги сите {' >'}
                      </Box>
                    </Box>
                  </Hidden>
                  <Hidden lgUp>
                    <Box color="white" component="span">
                      прикажи ги сите {' >'}
                    </Box>
                  </Hidden>
                </Box>
              </Grid>
            </StyledGrid>
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
