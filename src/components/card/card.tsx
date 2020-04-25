import React from 'react';
import { StyledMaterialCard, StyledMaterialCardTitle, StyledImage, StyledMaterialCardPrice, StyledCardMedia } from 'components/card/card.styles';
import { makeStyles, Theme, createStyles, CardMedia, CardContent, Typography, Card, Box, Hidden } from '@material-ui/core';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  title: string;
  img: string;
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
          <StyledMaterialCardTitle>{props.title}</StyledMaterialCardTitle>
          <StyledMaterialCardPrice>{props.children}</StyledMaterialCardPrice>
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
          <StyledImage img={props.img}>
            <Box p={3}>
              <Typography component="div">
                <Box fontWeight="fontWeightBold" color="white">
                  <Typography variant="h3">{props.title}</Typography>
                </Box>
              </Typography>
              <Hidden mdDown>
                {/* TODO: find a way to move the whole content at the bottom (Grid container flex or something) */}
                <Box pt={33}>
                  {props.children}
                  <Box mt={3}>
                    <Box color="white" component="span">
                      прикажи ги сите {' >'}
                    </Box>
                  </Box>
                </Box>
              </Hidden>
              <Hidden lgUp>
                {/* TODO: find a way to move the whole content at the bottom (Grid container flex or something) */}
                <Box pt={28}>
                  <Box color="white" component="span">
                    прикажи ги сите {' >'}
                  </Box>
                </Box>
              </Hidden>
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
