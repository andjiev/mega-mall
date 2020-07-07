import React, { useState, useEffect } from 'react';

import { Box, Grid, List, ListItem, Divider } from '@material-ui/core';
import { TopBar } from '../top-bar';
import { ProductItem } from '../product-item';
import { displayData } from './display.data';
import { StyledBox, StyledPagination } from './display.styles';

const Display = () => {
  const [posts, setPosts] = useState(displayData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const useStyles = makeStyles((theme: Theme) => ({
  //  ul: {
  //    justifyContent: ''
  //  }
  // }));

  var pages = 0;
  if (posts.length % postPerPage == 0) {
    pages = posts.length / postPerPage;
  } else {
    pages = Math.floor(posts.length / postPerPage) + 1;
  }

  //with useEffect implement onChange paginate to send the page number to backend so it can chancge the state in the func and re-render it with new data sent from server.

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box p={3}>
        <Box>
          <TopBar />
        </Box>
        <Box mt={3}>
          <List component={'ul'}>
            {currentPost.map(val => (
              <ListItem key={val.id} disableGutters={true} divider={true}>
                <StyledBox mt={1} mb={1}>
                  <ProductItem key={val.id} link={val.link} img={val.img} title={val.title} price={val.price} description={val.description} logo={val.logo}></ProductItem>
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
        <StyledPagination count={pages} page={currentPage} onChange={paginate} />
        {/* TODO fix the part with min-height on the box so that the paginationt doesn't jump up lol */}
      </Box>
    </>
  );
};

export default Display;
