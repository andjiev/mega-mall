import React, { useState } from 'react';
import { List, ListItem } from '@material-ui/core';
import ProductItem from './../product-item/product-item';
import { StyledPagination, StyledBox } from './../display/display.styles';
import { displayData } from './../display/display.data';

interface ShopsListProps {}

const ProductItemList = (props: ShopsListProps) => {
  const [posts, setPosts] = useState(displayData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  var pages = 0;
  if (posts.length % postPerPage == 0) {
    pages = posts.length / postPerPage;
  } else {
    pages = Math.floor(posts.length / postPerPage) + 1;
  }

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <>
      <List component={'ul'}>
        {currentPost.map(val => (
          <ListItem key={val.id} disableGutters={true} divider={true}>
            <StyledBox mt={1} mb={1}>
              <ProductItem key={val.id} img={val.img} title={val.title} price={val.price} description={val.description} logo={val.logo}></ProductItem>
            </StyledBox>
          </ListItem>
        ))}
      </List>
      <StyledPagination count={pages} page={currentPage} onChange={paginate} />
      {/* TODO fix the part with min-height on the box so that the paginationt doesn't jump up lol */}
    </>
  );
};

export default ProductItemList;
