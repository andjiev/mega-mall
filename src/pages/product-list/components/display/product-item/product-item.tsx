import React, { useState, useEffect } from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { StyledImage, StyledLogo, StyledGrid } from './product-item.styles';

export interface IProductItem {
  img?: string;
  link?: string;
  title: string;
  price: string;
  description: string;
  logo: string;
}

const ProductItem = (props: IProductItem) => {
  return (
    <>
      <StyledGrid container spacing={2}>
        {props.img && (
          <>
            <Hidden mdDown>
              <Grid item xs={2}>
                <Box>
                  <StyledImage src={props.img} />
                </Box>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={3}>
                <Box>
                  <StyledImage src={props.img} />
                </Box>
              </Grid>
            </Hidden>
          </>
        )}

        {props.img ? (
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>
                  <Hidden mdDown>
                    <Box fontFamily="RobotoBold" fontSize="18px">
                      {props.title.length > 50 ? props.title.substring(0, 50) + '...' : props.title}
                    </Box>
                  </Hidden>
                  <Hidden mdUp>
                    <Box fontFamily="RobotoRegular" fontSize="14px">
                      {props.title.length > 50 ? props.title.substring(0, 50) + '...' : props.title}
                    </Box>
                  </Hidden>
                </Typography>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs={6}>
                  <Typography variant="h4">
                    <Hidden mdDown>
                      <Box fontFamily="OswaldMedium" fontSize="24px" mt={3}>
                        {props.price}
                      </Box>
                    </Hidden>
                    <Hidden mdUp>
                      <Box fontFamily="OswaldMedium" fontSize="18px" mt={3}>
                        {props.price}
                      </Box>
                    </Hidden>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Hidden mdDown>
                    <Box>
                      {/* TODO this needs to be a link*/}
                      <StyledLogo src={props.logo} />
                    </Box>
                  </Hidden>
                  <Hidden mdUp>
                    <Box mt={3}>
                      {/* TODO this needs to be a link*/}
                      <StyledLogo src={props.logo} />
                    </Box>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>
                  <Hidden mdDown>
                    <Box fontFamily="RobotoBold" fontSize="18px">
                      {props.title.length > 50 ? props.title.substring(0, 50) + '...' : props.title}
                    </Box>
                  </Hidden>
                  <Hidden mdUp>
                    <Box fontFamily="RobotoRegular" fontSize="14px">
                      {props.title.length > 50 ? props.title.substring(0, 50) + '...' : props.title}
                    </Box>
                  </Hidden>
                </Typography>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs={6}>
                  <Typography variant="h4">
                    <Hidden mdDown>
                      <Box fontFamily="OswaldMedium" fontSize="24px" mt={3}>
                        {props.price}
                      </Box>
                    </Hidden>
                    <Hidden mdUp>
                      <Box fontFamily="OswaldMedium" fontSize="18px" mt={3}>
                        {props.price}
                      </Box>
                    </Hidden>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Hidden mdDown>
                    <Box>
                      {/* TODO this needs to be a link*/}
                      <StyledLogo src={props.logo} />
                    </Box>
                  </Hidden>
                  <Hidden mdUp>
                    <Box mt={3}>
                      {/* TODO this needs to be a link*/}
                      <StyledLogo src={props.logo} />
                    </Box>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </StyledGrid>
    </>
  );
};

export default ProductItem;
