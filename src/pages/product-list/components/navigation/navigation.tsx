import React from 'react';
import { MenuItem } from 'lib/data';
import { Box, Link, List, ListItem, Typography } from '@material-ui/core';
import { StyledNavigation, StyledTypography } from 'pages/product-list/components/navigation/navigation.styles';

interface IProps {
  categoryItem: MenuItem;
  subCategoryItem?: MenuItem;
}

const Navigation = (props: IProps) => {
  const renderItem = (item: MenuItem): JSX.Element => {
    return (
      <>
        <ListItem>
          <Link href={item.link} color="inherit">
            <StyledTypography variant="body2" isSelected={props.subCategoryItem && item.id === props.subCategoryItem.id}>
              {item.title}
            </StyledTypography>
          </Link>
        </ListItem>
      </>
    );
  };

  return (
    <>
      <StyledNavigation>
        <Box p={3} pt={1}>
          <List>
            <List disablePadding>
              <Link href={props.categoryItem.link} color="inherit">
                <Typography variant="h6">{props.categoryItem.title}</Typography>
              </Link>
            </List>
            {props.categoryItem.children && (
              <Box mt={1}>
                {props.categoryItem.children.map(child => (
                  <List key={child.id} disablePadding>
                    {renderItem(child)}
                  </List>
                ))}
              </Box>
            )}
          </List>
        </Box>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
