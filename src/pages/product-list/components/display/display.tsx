import React, { useState } from 'react';

import { Box, Grid, List, ListItem, Divider } from '@material-ui/core';
import { TopBar } from '../top-bar';
import { ProductItem } from '../product-item';
import { displayData } from './display.data';
import { StyledBox } from './display.styles';

const Display = () => {
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const numberPages = Math.floor(totalResults / 20);
  return (
    <>
      <Box p={3}>
        <Box>
          <TopBar />
        </Box>
        <Box mt={3}>
          <List component={'ul'}>
            {displayData.map(val => (
              <ListItem key={val.id} disableGutters={true} divider={true}>
                <StyledBox mt={1} mb={1}>
                  <ProductItem key={val.id} img={val.img} title={val.title} price={val.price} description={val.description} logo={val.logo}></ProductItem>
                </StyledBox>
              </ListItem>
            ))}
          </List>
          {/* 2 products temporary */}
          {/* <Box>
            <ProductItem />
          </Box>
          <Box>
            <ProductItem />
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Display;
