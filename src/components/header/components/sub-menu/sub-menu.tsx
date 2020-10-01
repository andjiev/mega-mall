import React, { useEffect, useState } from 'react';
import { List, Grid, Box, Typography, ListItem } from '@material-ui/core';

import { StyledSubMenu, StyledIcons, StyledTab, StyledTabs, StyledListItemText } from './sub-menu.styles';
import Link from '@material-ui/core/Link';

import Banner from 'components/banner/banner';
import { MenuItem } from 'lib/data';

interface ISubMenuProps {
  menuItems: MenuItem[];

  onSubmenuChange: (value: boolean) => void;
}

const SubMenu = (props: ISubMenuProps) => {
  const [categoryId, setCategoryId] = useState<number | undefined>(1);
  const [subCategories, setSubCategories] = useState<MenuItem[]>([]);

  useEffect(() => {
    // set to first category
    onCategoryChange(1);
  }, []);

  const onCategoryChange = (value: number) => {
    const menuItem = props.menuItems.find(x => x.id === value);
    if (menuItem) {
      setSubCategories(menuItem.children && menuItem.children.length > 0 ? menuItem.children : []);
    }

    setCategoryId(value);
  };

  return (
    <>
      <StyledSubMenu boxShadow={3} onMouseEnter={() => props.onSubmenuChange(true)} onMouseLeave={() => props.onSubmenuChange(false)}>
        <Grid container spacing={2}>
          <Grid item sm={4} md={3} lg={2}>
            <StyledTabs value={categoryId} orientation="vertical">
              {props.menuItems.map((item, index) => {
                return (
                  <StyledTab
                    key={item.id}
                    value={item.id}
                    displayBorder={index < props.menuItems.length - 1}
                    isActive={item.id === categoryId}
                    label={
                      <Box pt={1} pb={1}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item>
                            <StyledIcons src={item.imageSrc} />
                          </Grid>
                          <Grid item>{item.title}</Grid>
                        </Grid>
                      </Box>
                    }
                    onMouseEnter={() => onCategoryChange(item.id)}
                    onClick={() => (window.location.href = item.link)}
                  />
                );
              })}
            </StyledTabs>
          </Grid>
          <Grid item sm={5} md={6} lg={7}>
            {subCategories.length > 0 && (
              <Box pl={2} pr={2}>
                <Grid container spacing={3}>
                  {subCategories
                    .filter(x => x.children && x.children.length > 0)
                    .slice(0, 3)
                    .map(subItem => {
                      return (
                        <Grid key={subItem.id} item xs={4}>
                          <List>
                            <ListItem disableGutters>
                              <Link href={subItem.link}>
                                <StyledListItemText primary={subItem.title}></StyledListItemText>
                              </Link>
                            </ListItem>
                            {subItem.children &&
                              subItem.children.slice(0, 6).map(item => {
                                return (
                                  <ListItem key={item.id} disableGutters>
                                    <Link href={item.link}>
                                      <Typography variant="subtitle2">{item.title}</Typography>
                                    </Link>
                                  </ListItem>
                                );
                              })}
                          </List>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            )}
          </Grid>
          <Grid item sm={3}>
            <Box p={2}>
              {/* TODO: this should come from the menu item */}
              <Banner size="menu" bgColor="#F0F5FF" imagesource="/assets/images/main/Najnovite-patiki-na-nike.jpg" />
            </Box>
          </Grid>
        </Grid>
      </StyledSubMenu>
    </>
  );
};

export default SubMenu;
