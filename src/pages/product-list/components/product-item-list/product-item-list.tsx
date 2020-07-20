import React, { useState } from 'react';
import { List, ListItem, Button } from '@material-ui/core';
import ProductItem from './../product-item/product-item';
import { StyledPagination, StyledBox } from './../display/display.styles';
import { displayData } from './../display/display.data';
import { StyledButton } from './product-item-list.styles';

interface ShopsListProps {
  isPaging: 'prodList' | 'detailList';
}

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

  const showMorePosts = () => {
    setPostPerPage(postPerPage + 10);
  };

  const rednerPagination = () => {
    const indexOfLastPost = currentPage * (postPerPage + 10);
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <>
        <StyledPagination count={pages} page={currentPage} onChange={paginate} />
      </>
    );
  };
  const rednerShowMoreBtn = () => {
    return (
      <>
        <StyledButton variant="contained" color="secondary" onClick={showMorePosts}>
          види повеќе
        </StyledButton>
      </>
    );
  };
  return (
    <>
      <List component={'ul'}>
        {currentPost.map(val => (
          <ListItem key={val.id} disableGutters={true} divider={true}>
            <StyledBox mt={1} mb={1}>
              <ProductItem key={val.id} img={val.img} title={val.title} price={val.price} description={val.description} logo={val.logo} link={val.link}></ProductItem>
            </StyledBox>
          </ListItem>
        ))}
      </List>
      {props.isPaging === 'prodList' ? rednerPagination() : rednerShowMoreBtn()}

      {/* TODO fix the part with min-height on the box so that the paginationt doesn't jump up lol */}
    </>
  );
};

export default ProductItemList;
