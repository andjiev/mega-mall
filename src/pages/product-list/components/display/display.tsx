import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';

import { Box, ListItem, List, Link, Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import DisplayHeader from './components/display-header/display-header';

import { ProductItem } from './product-item';
import { generatePath } from 'react-router';
import { ROUTES } from 'consts';
import { StyledBox, StyledLink, StyledPagination } from './display.styles';
import { getProducts, changePageOptions } from 'store/product-list-store';
import { PageOptions } from 'lib/models';
import { displayData } from './product-item-list/product-item-list.data';
import { ListTypes } from 'lib/enums';
import { shopsData } from './shops-list/shops-list.data';
import { SubcategoryCard } from 'pages/category/components/subcategory-card';

interface IProps {
  data: Models.Product.Model[];
  count: number;
  options: PageOptions;

  onInit: () => void;
  onOptionsChange: (options: PageOptions) => void;
}

const Display = (props: IProps) => {
  const [listType, setListType] = useState(ListTypes.Products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [pages, setPages] = useState(0);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = shopsData.slice(indexOfFirstPost, indexOfLastPost);

  const listTypeChange = (type: ListTypes) => {
    setListType(type);
  };

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    props.onInit();
  }, []);

  const calculatePages = () => {
    if (shopsData) {
      if (shopsData.length % postPerPage == 0) {
        setPages(shopsData.length / postPerPage);
      } else {
        setPages(Math.floor(shopsData.length / postPerPage) + 1);
      }
    }
  };

  useEffect(() => {
    calculatePages();
  }, []);

  return (
    <>
      {props.data && props.data.length ? (
        <Box p={3}>
          <Box>
            <DisplayHeader onListTypeChange={listTypeChange} listType={listType} />
          </Box>
          <Box mt={3}>
            {listType === ListTypes.Products ? (
              <List component={'ul'}>
                {props.data.map(product => {
                  return (
                    <StyledLink key={product.id} href={generatePath(ROUTES.PRODUCT, { id: product.id })}>
                      <ListItem button disableGutters={true} divider={true}>
                        <StyledBox mt={1} mb={1}>
                          <ProductItem
                            key={product.id}
                            img={product.imageSource || displayData[1].img}
                            title={product.name}
                            price={product.price === '' ? '0' : product.price}
                            discountPrice={product.discountPrice}
                            description={''}
                            logo={''}
                            link={product.link}
                          />
                        </StyledBox>
                      </ListItem>
                    </StyledLink>
                  );
                })}
              </List>
            ) : (
              <>
                <Grid container spacing={3}>
                  {currentPost.map(val => (
                    <Grid item key={val.id} xs={12} sm={6} md={6} lg={2} xl={2}>
                      {/* <SubcategoryCard url={val.url} title={val.title} link={val.link}></SubcategoryCard> */}
                    </Grid>
                  ))}
                </Grid>
                <StyledPagination count={pages} page={currentPage} onChange={paginate} />
              </>
            )}
          </Box>
          <Box>
            <StyledPagination count={props.count} page={props.options.page} onChange={(_, value: number) => props.onOptionsChange({ ...props.options, page: value })} />
          </Box>
        </Box>
      ) : (
        <>Loading data...</>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: () => {
    dispatch(getProducts());
  },
  onOptionsChange: (options: PageOptions) => {
    dispatch(changePageOptions(options));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.productList.data,
    count: state.productList.count,
    options: state.productList.options
  };
};

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default DisplayContainer;
