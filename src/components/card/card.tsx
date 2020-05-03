import React from 'react';
import { StyledMaterialCard, StyledImage, StyledCardMedia } from 'components/card/card.styles';
import { makeStyles, Theme, createStyles, CardMedia, CardContent, Typography, Card, Box, Hidden } from '@material-ui/core';


interface CardProps {
  size: 'small' | 'medium' | 'large';
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

const _Card = (props: CardProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (props.size == 'small') {
    return (
      <StyledMaterialCard>
        <StyledCardMedia className={classes.media} image={props.img} />
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
  } else if (props.size == 'medium') {
    return <> </>;
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
