import React from 'react';

import { StyledNavigation } from './navigation.styles';
import { Box, Link, List, ListItem, Typography } from '@material-ui/core';
import { MenuItem } from 'lib/data';

interface IProps {
  categoryItem: MenuItem;
}

const Navigation = (props: IProps) => {
  const renderList = (item: MenuItem, level = 1): JSX.Element => {
    const variant = level == 1 ? 'h6' : 'body2';

    return (
      <>
        <List disablePadding>
          <Link href={item.link} color="inherit">
            <Typography variant={variant}>{item.title}</Typography>
          </Link>
        </List>

        {level <= 2 && item.children && item.children.length > 0 && (
          <Box mt={1}>
            {item.children.slice(0, 5).map(child => (
              <ListItem key={child.id}>{renderList(child, level + 1)}</ListItem>
            ))}
          </Box>
        )}
      </>
    );
  };

  return (
    <>
      <StyledNavigation>
        <Box p={3} pt={1}>
          <List>
            {props.categoryItem.children &&
              props.categoryItem.children
                .filter(x => x.children && x.children.length > 0)
                .slice(0, 3)
                .map(child => <List key={child.id}>{renderList(child)}</List>)}
          </List>
        </Box>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
