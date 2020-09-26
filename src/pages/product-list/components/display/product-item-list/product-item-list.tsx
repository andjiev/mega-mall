import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, Button, Typography } from '@material-ui/core';
import { displayData } from './product-item-list.data';
import { StyledButton } from './product-item-list.styles';
import { StyledPagination, StyledBox } from '../display.styles';
import { ProductItem } from './../product-item';
import { generatePath } from 'react-router';
import { ROUTES } from '../../../../../consts';

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

  const renderPagination = () => {
    const indexOfLastPost = currentPage * (postPerPage + 10);
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <>
        <StyledPagination count={pages} page={currentPage} onChange={paginate} />
      </>
    );
  };
  const renderShowMoreButton = () => {
    return (
      <>
        <StyledButton variant="contained" color="secondary" onClick={showMorePosts}>
          <Typography variant="button">види повеќе</Typography>
        </StyledButton>
      </>
    );
  };

  return (
    <>
      <List component={'ul'}>
        {currentPost.map(val => (
          <ListItem key={val.id} button component={RouterLink} to={generatePath(ROUTES.PRODUCT, { id: val.id })} disableGutters={true} divider={true}>
            <StyledBox mt={1} mb={1}>
              <ProductItem key={val.id} title={val.title} price={val.price === '' ? '0' : val.price} discountPrice={val.discountPrice} description={val.description} logo={val.logo} link={val.link} />
            </StyledBox>
          </ListItem>
        ))}
      </List>
      {props.isPaging === 'prodList' ? renderPagination() : renderShowMoreButton()}

      {/* TODO fix the part with min-height on the box so that the paginationt doesn't jump up lol */}
    </>
  );
};

export default ProductItemList;
