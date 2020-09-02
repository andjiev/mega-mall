import React, { useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';

import { Drawer, makeStyles, createStyles, List, ListItem, ListItemText, Grid, IconButton, ListItemSecondaryAction, Box, Typography, ListItemIcon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import { StyledListItem } from './mobile-menu.styles';
import { MenuItem } from 'lib/data';
import { findParent, findRootElements } from 'lib/utils';

interface IProps {
  open: boolean;
  menuItems: MenuItem[];

  navigateTo: (url: string) => void;
  onClose: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      width: '80%',
      backgroundColor: '#f0f5ff'
    }
  })
);

const MobileMenu = (props: IProps) => {
  const styles = useStyles();
  const [selectedItem, setSelectedItem] = useState<MenuItem | undefined>(undefined);
  const [items, setItems] = useState<MenuItem[]>(props.menuItems);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setItems(item.children && item.children.length > 0 ? item.children : []);
  };

  const goBack = () => {
    if (selectedItem && selectedItem.parentId) {
      const parent = findParent(props.menuItems, selectedItem.parentId);
      setSelectedItem(parent);
      setItems(parent && parent.children ? parent.children : []);
    } else if (selectedItem) {
      const rootElements = findRootElements(props.menuItems);
      setSelectedItem(undefined);
      setItems(rootElements);
    }
  };

  const onClose = () => {
    setSelectedItem(undefined);
    setItems(props.menuItems);

    props.onClose();
  };

  return (
    <Drawer anchor="right" open={props.open} onClose={onClose} classes={{ paper: styles.drawerPaper }}>
      <List disablePadding>
        {selectedItem && (
          <>
            <StyledListItem>
              <ListItemIcon>
                <IconButton onClick={goBack}>
                  <ChevronLeftIcon fontSize="inherit" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" color="primary">
                    {selectedItem.title}
                  </Typography>
                }
              />
            </StyledListItem>
          </>
        )}
        {!selectedItem && (
          <>
            <StyledListItem>
              <Grid container justify="flex-end">
                <IconButton onClick={onClose}>
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </StyledListItem>
            <StyledListItem button>
              <Box pl={2} pr={2}>
                <ListItemText primary={<Typography variant="subtitle1">СИТЕ КАТЕГОРИИ</Typography>} />
                <ListItemSecondaryAction>
                  <IconButton>
                    <ChevronRightIcon fontSize="inherit" />
                  </IconButton>
                </ListItemSecondaryAction>
              </Box>
            </StyledListItem>
          </>
        )}
        {items.map(item => {
          return (
            <StyledListItem key={item.id} button>
              <Box pl={2} pr={2}>
                <ListItemText
                  primary={<Typography variant="subtitle1">{item.title}</Typography>}
                  onClick={() => {
                    props.onClose();
                    props.navigateTo(item.link);
                  }}
                />
                {item.children && item.children.length > 0 && (
                  <ListItemSecondaryAction onClick={() => handleItemClick(item)}>
                    <IconButton>
                      <ChevronRightIcon fontSize="inherit" />
                    </IconButton>
                  </ListItemSecondaryAction>
                )}
              </Box>
            </StyledListItem>
          );
        })}
        <ListItem>
          <Box p={2}>
            <LanguagePickerContainer size="large" />
          </Box>
        </ListItem>
      </List>
    </Drawer>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  navigateTo: (url: string) => {
    dispatch(push(url));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    menuItems: state.shared.menuItems
  };
};

const MobileMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MobileMenu);

export default MobileMenuContainer;
