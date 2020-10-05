import React from 'react';

import { StyledImage, StyledButton, StyledTypography, StyledOverlay } from './main-slider.style';
import { Box, Grid, Typography, makeStyles, Theme, createStyles, Hidden, Container } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import { ISliderItem, sliderItems } from './main-slider.data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselTitle: {
      fontSize: '48px',
      color: '#ffffff',
      fontFamily: 'OswaldBold',
      whiteSpace: 'pre-line',

      [theme.breakpoints.down('md')]: {
        fontSize: '36px'
      }
    },
    carouselSubtitle: {
      fontSize: '16px',
      color: '#ffffff',
      fontFamily: 'RobotoRegular',
      whiteSpace: 'pre-line',

      [theme.breakpoints.down('md')]: {
        fontSize: '14px'
      }
    },
    carouselButton: {
      fontSize: '14px',
      color: '#ffffff',
      fontFamily: 'RobotoRegular'
    }
  })
);

const MainSlider = () => {
  const classes = useStyles();
  const renderItem = (item: ISliderItem) => {
    return (
      <StyledImage src={item.imageSrc}>
        <StyledOverlay />
        <Container>
          <Grid container item xs={6}>
            <Box mt={5} zIndex={1}>
              <Grid item xs={12}>
                <Box color="white" textAlign="left" mt={2} mb={2}>
                  <Hidden xsDown>
                    <Typography variant="h1">{item.title}</Typography>
                  </Hidden>
                  <Hidden smUp>
                    <Typography variant="h3">{item.title}</Typography>
                  </Hidden>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box color="white" textAlign="left" mt={2} mb={2}>
                  <Typography variant="body1" className={classes.carouselSubtitle}>
                    {item.subTitle}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <StyledButton variant="contained" color="secondary" size="large">
                  <Typography variant="button" className={classes.carouselButton}>
                    {item.buttonText}
                  </Typography>
                </StyledButton>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </StyledImage>
    );
  };

  return (
    <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false}>
      {sliderItems.map((item, index) => {
        return <Box key={index}>{renderItem(item)}</Box>;
      })}
    </Carousel>
  );
};

export default MainSlider;
