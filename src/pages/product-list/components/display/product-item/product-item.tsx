import React, { useState, useEffect } from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { StyledImage, StyledLogo, StyledGrid, StyledPriceBox, MobileStyledPriceBox } from './product-item.styles';
import { getTranslations } from 'services/translation-service';
import { translate } from 'lib/translate';

export interface IProductItem {
  img?: string;
  link?: string;
  title: string;
  price: string;
  discountPrice?: string;
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
                      {props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}
                    </Box>
                  </Hidden>
                  <Hidden mdUp>
                    <Box fontFamily="RobotoRegular" fontSize="14px">
                      {props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}
                    </Box>
                  </Hidden>
                </Typography>
              </Grid>
              <Grid container xs={12}>
                {props.discountPrice ? (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="h4">
                        <Hidden mdDown>
                          <Grid container item xs={12}>
                            <Grid item xs={2}>
                              <StyledPriceBox />
                              <Box fontFamily="OswaldMedium" fontSize="24px" mt={5}>
                                {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                            <Grid item xs={2}>
                              <Box fontFamily="OswaldMedium" fontSize="24px" mt={5}>
                                {props.discountPrice + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                          </Grid>
                        </Hidden>
                        <Hidden mdUp>
                          <Grid container item xs={12}>
                            <Grid item xs={6}>
                              <MobileStyledPriceBox />
                              <Box fontFamily="OswaldMedium" fontSize="18px" mt={3}>
                                {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                            <Grid item xs={6}>
                              <Box fontFamily="OswaldMedium" fontSize="18px" mt={3}>
                                {props.discountPrice + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                          </Grid>
                        </Hidden>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
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
                  </>
                ) : (
                  <>
                    <Grid item xs={6}>
                      <Typography variant="h4">
                        <Hidden mdDown>
                          <Grid container item xs={12}>
                            <Grid item xs={6}>
                              <Box fontFamily="OswaldMedium" fontSize="24px" mt={5}>
                                {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                          </Grid>
                        </Hidden>
                        <Hidden mdUp>
                          <Grid container item xs={12}>
                            <Box fontFamily="OswaldMedium" fontSize="18px" mt={5}>
                              {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                            </Box>
                          </Grid>
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
                  </>
                )}
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
                      {props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}
                    </Box>
                  </Hidden>
                  <Hidden mdUp>
                    <Box fontFamily="RobotoRegular" fontSize="14px">
                      {props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}
                    </Box>
                  </Hidden>
                </Typography>
              </Grid>
              <Grid container xs={12}>
                {props.discountPrice ? (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="h4">
                        <Hidden mdDown>
                          <Grid container item xs={12}>
                            <Grid item xs={2}>
                              <StyledPriceBox />
                              <Box fontFamily="OswaldMedium" fontSize="24px" mt={5}>
                                {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                            <Grid item xs={2}>
                              <Box fontFamily="OswaldMedium" fontSize="24px" mt={5}>
                                {props.discountPrice + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                          </Grid>
                        </Hidden>
                        <Hidden mdUp>
                          <Grid container item xs={12}>
                            <Grid item xs={4}>
                              <MobileStyledPriceBox />
                              <Box fontFamily="OswaldMedium" fontSize="18px" mt={3}>
                                {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                            <Grid item xs={4}>
                              <Box fontFamily="OswaldMedium" fontSize="18px" mt={3}>
                                {props.discountPrice + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                          </Grid>
                        </Hidden>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
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
                  </>
                ) : (
                  <>
                    <Grid item xs={6}>
                      <Typography variant="h4">
                        <Hidden mdDown>
                          <Grid container item xs={12}>
                            <Grid item xs={6}>
                              <Box fontFamily="OswaldMedium" fontSize="24px" mt={5}>
                                {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                              </Box>
                            </Grid>
                          </Grid>
                        </Hidden>
                        <Hidden mdUp>
                          <Grid container item xs={12}>
                            <Box fontFamily="OswaldMedium" fontSize="18px" mt={4}>
                              {props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                            </Box>
                          </Grid>
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
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
      </StyledGrid>
    </>
  );
};

export default ProductItem;
