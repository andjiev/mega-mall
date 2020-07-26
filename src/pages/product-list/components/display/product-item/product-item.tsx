import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { StyledImage, StyledGrid, StyledGridLogo, StyledLogo, StyledLogoBox, StyledFlexGrid } from './product-item.styles';

export interface IProductItem {
  img: string;
  link?: string;
  title: string;
  price: string;
  description: string;
  logo: string;
}

const ProductItem = (props: IProductItem) => {
  return (
    <>
      <StyledGrid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item xs={2}>
          <Box>
            <StyledImage src={props.img} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <StyledFlexGrid container item xs direction="column" justify="flex-end">
              {/*TODO THIS ISNT LIKE IN THE DESING NEEDS HEIGHT AND SPACE BETWEEN THE TEXTS */}
              <Grid item xs={12}>
                <Typography variant="h4">{props.title}</Typography>
                {/* TODO this is not lined up to the top of the card :/ FIX IT  */}
              </Grid>
              <Grid item xs={12}>
                <Box mb={1}>
                  <Typography variant="h3">{props.price}</Typography>
                </Box>
                <Box>
                  <Typography variant="body1" noWrap>
                    {props.description}
                  </Typography>
                </Box>
              </Grid>
            </StyledFlexGrid>
          </Box>
        </Grid>
        <StyledGridLogo item xs={2}>
          <StyledLogoBox>
            <StyledLogo src={props.logo}></StyledLogo>
          </StyledLogoBox>
          {/* TODO this needs to be a link and needs borders*/}
        </StyledGridLogo>
      </StyledGrid>
    </>
  );
};

export default ProductItem;
