import React, { useEffect } from 'react';
import { Box, Grid, Typography, Link, Hidden } from '@material-ui/core';
import Card from './../../../../components/card/card';
import { cards } from './product-grid.data';
import { AppDispatch } from 'index';
import { getLatestProducts } from 'store/latest-products-store';
import ApplicationState from 'store/application-state';
import { connect } from 'react-redux';
import { translate } from 'lib/translate';
import { displayData } from 'pages/product-list/components/display/product-item-list/product-item-list.data';

interface IProps {
  data: Models.Product.Model[];
  onInit: () => void;
}

const ProductGrid = (props: IProps) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <>
      {props.data && props.data.length ? (
        <>
          <Box>
            <Grid container justify="space-between">
              <Grid item sm={6} xs={12}>
                <Typography variant="h5">Најнови производи</Typography>
              </Grid>
              <Hidden xsDown>
                <Grid container item xs={6} justify="flex-end" alignItems="flex-end">
                  <Box component="span">
                    <Typography variant="body2">прикажи ги сите {' >'}</Typography>
                  </Box>
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Grid container item xs={12} alignItems="flex-end">
                  <Box component="span" mt={1}>
                    <Typography variant="body2">прикажи ги сите {' >'}</Typography>
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </Box>
          <Box mt={3} pb={3}>
            <Grid container direction="row" justify="center" alignItems="stretch" spacing={2}>
              {props.data.map((res, index) =>
                index < 8 ? (
                  <Grid item key={res.id} xs={12} md={3}>
                    <Link href={res.link}>
                      <Card key={res.id} title={res.name.substring(0, 30)} url={res.imageSource || displayData[2].img} size="small">
                        <Box component="span">{res.price === '' ? '0 ' + translate('MegaMall_Product_Price_Currency', 'МКД') : res.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}</Box>
                      </Card>
                    </Link>
                  </Grid>
                ) : (
                  []
                )
              )}
            </Grid>
          </Box>
        </>
      ) : (
        <>Loading data...</>
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: () => {
    dispatch(getLatestProducts());
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.latestProductList.data
  };
};

const LatestProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
export default LatestProductContainer;
