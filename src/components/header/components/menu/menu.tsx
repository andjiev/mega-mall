import React, { useState } from 'react';

import { StyledLink } from 'components/styled-link';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import { menuItems } from './menu.data';
import { StyledBox } from './menu.styles';
import { CategoryTypes } from 'lib/enums';

interface IMenuProps {
  isActive: boolean;

  onCategoryChange: (value: CategoryTypes) => void;
  onHideSubmenuChange: () => void;
}

const HomeCenterMenu = (props: IMenuProps) => {
  const [categoryType, setCategoryType] = useState<CategoryTypes | undefined>(undefined);

  const onCategoryChange = (type: CategoryTypes) => {
    setCategoryType(type);

    // this one indicates the submenu to render the proper content
    props.onCategoryChange(type);
  };

  return (
    <Container>
      <Box>
        <Grid container justify="space-between">
          {menuItems.map(item => (
            <Grid key={item.type} item>
              <StyledBox pt={2} pb={2} isActive={props.isActive && categoryType === item.type} onMouseEnter={() => onCategoryChange(item.type)} onMouseLeave={() => props.onHideSubmenuChange()}>
                <Typography variant="h6">
                  <StyledLink href={'#'} underline="none">
                    {item.title}
                  </StyledLink>
                </Typography>
              </StyledBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeCenterMenu;
