import React from 'react';
import { StyledImage, StyledGrid, StyledMaterialCard, StyledCardMedia, GiftCardImage } from 'components/card/card.styles';
import { Card, Box, Typography, Hidden, Grid, CardMedia, makeStyles, Theme, createStyles, CardContent } from '@material-ui/core';
import { translate } from 'lib/translate';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  title?: string;
  url?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    }
  })
);

const _Card = (props: CardProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  if (props.size == 'small') {
    return (
      <StyledMaterialCard>
        <StyledCardMedia className={classes.media} image={props.url} />
        <CardContent>
          <Box>
            <Typography variant="body1">{props.title}</Typography>
          </Box>
          <Box>
            <Typography variant="h4">{props.children}</Typography>
          </Box>
        </CardContent>
      </StyledMaterialCard>
    );
  } else if (props.size == 'medium') {
    return (
      <>
        <Card>
          <CardMedia>
            <GiftCardImage url={props.url}></GiftCardImage>
          </CardMedia>
        </Card>
      </>
    );
  }

  return (
    <>
      <Card raised>
        <CardMedia>
          <StyledImage url={props.url}>
            <StyledGrid container direction="column">
              <Grid item xs>
                <Box p={3} pt={2}>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" color="white">
                      <Typography variant="h2">{props.title}</Typography>
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
                        <Typography variant="body2">{translate('MegaMall_Card_Show', 'прикажи ги сите >')}</Typography>
                      </Box>
                    </Box>
                  </Hidden>
                  <Hidden lgUp>
                    <Box color="white" component="span">
                      <Typography variant="body2">
                        {translate('MegaMall_Card_Show', 'прикажи ги сите >')} {' >'}
                      </Typography>
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
