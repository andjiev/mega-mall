import React from 'react';

import { StyledGrid, StyledImage, StyledContainer, StyledButton, StyledTypography } from './main-slider.style';
import { Box, Grid, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
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
        <StyledGrid container direction="column" justify="center">
          <StyledContainer>
            <Box color="white">
              <Grid item>
                <Typography variant="h1" className={classes.carouselTitle}>
                  {item.title}
                </Typography>
              </Grid>
              <Box mt={2}>
                <Grid item>
                  <Box component="span">
                    <Typography variant="body1" className={classes.carouselSubtitle}>
                      {item.subTitle}
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
            <Grid item>
              <Box mt={3}>
                <StyledButton variant="contained" color="secondary" size="large">
                  <Typography variant="button" className={classes.carouselButton}>
                    {item.buttonText}
                  </Typography>
                </StyledButton>
              </Box>
            </Grid>
          </StyledContainer>
        </StyledGrid>
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
