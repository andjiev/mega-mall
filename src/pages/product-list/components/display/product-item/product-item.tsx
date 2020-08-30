import React from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { StyledImage, StyledLogo } from './product-item.styles';

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
      <Grid container spacing={2}>
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

        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>
                <Hidden mdDown>
                  <Box fontFamily="RobotoBold" fontSize="18px">
                    {props.title.substring(0, 50) + '...'}
                  </Box>
                </Hidden>
                <Hidden mdUp>
                  <Box fontFamily="RobotoRegular" fontSize="14px">
                    {props.title.substring(0, 50) + '...'}
                  </Box>
                </Hidden>
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={2}>
            <Box>
              {/* TODO this needs to be a link*/}
              <StyledLogo src={props.logo} />
            </Box>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container item xs={12} alignItems="flex-end" justify="flex-end">
            <Box>
              {/* TODO this needs to be a link*/}
              <StyledLogo src={props.logo} />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};

export default ProductItem;
