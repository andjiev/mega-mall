import React, { useEffect, useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { List, Grid, Container, ListItem, Box, Typography, Theme, Tabs, Tab } from '@material-ui/core';

import { StyledSubMenu, StyledListItemText, SubmenuImage } from './sub-menu.styles';
import Link from '@material-ui/core/Link';

import { submenuItems, ISubmenuItem } from './sub-menu.data';
import { StyledLink } from 'components/styled-link';
import { CategoryTypes } from 'lib/enums';
import { menuItems } from './../menu/menu.data';

//Tab panels

interface TabPanelProps {
  className?: any;
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fef3f4',
    display: 'flex',
    flexDirecation: 'row',
    height: 300,
    padding: 0,
    overflowY: 'hidden',
    width: '100%',
    zIndex: 10,
    position: 'absolute',
    textAlign: 'left'
  },
  tabs: {
    borderRight: `1px solid #355C7C`,
    overflow: 'visible'
  },
  tabPanel: {
    padding: 0,
    width: '100%'
  },
  tabLabel: {
    fontFamily: 'OswaldBold',
    fontSize: '14px',
    textAlign: 'left',
    alignItems: 'left'
  },
  subContainer: {
    maxWidth: '1600px',
    margin: '0 auto',
    display: 'block'
  }
}));

//===============================

interface ISubMenuProps {
  categoryType?: CategoryTypes;

  onSubmenuChange: (value: boolean) => void;
  onCategoryChange: (value: CategoryTypes) => void;
}

const SubMenu = (props: ISubMenuProps) => {
  // Vertical tabs
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [submenuContent, setSubmenuContent] = useState<ISubmenuItem | undefined>(undefined);

  useEffect(() => {
    if (props.categoryType) {
      setSubmenuContent(submenuItems.find(x => x.type === props.categoryType));
    }
  }, [props.categoryType]);

  const [categoryType, setCategoryType] = useState<CategoryTypes | undefined>(undefined);

  const onCategoryChange = (type: CategoryTypes) => {
    setCategoryType(type);
    // this one indicates the submenu to render the proper content
    props.onCategoryChange(type);
  };

  return (
    <>
      <Box className={classes.root} onMouseEnter={() => props.onSubmenuChange(true)} onMouseLeave={() => props.onSubmenuChange(false)}>
        <Tabs orientation="vertical" value={props.categoryType} onChange={(event, value) => onCategoryChange(value)} aria-label="Main Categories" className={classes.tabs}>
          {menuItems.map((item, index) => {
            //Make Tab with styledcomponents
            return <Tab key={index} value={item.type} className={classes.tabLabel} label={item.title} {...a11yProps(index)} />;
          })}
        </Tabs>

        <TabPanel className={classes.tabPanel} value={props.categoryType} index={props.categoryType}>
          {submenuContent && (
            <StyledSubMenu>
              <Container className={classes.subContainer}>
                <Box>
                  <Grid container>
                    <Grid item xs={8}>
                      <Grid container item xs={12} spacing={10}>
                        <Grid item xs={4}>
                          <List>
                            <ListItem disableGutters>
                              <StyledListItemText primary={submenuContent.data.left.title}></StyledListItemText>
                            </ListItem>
                            {submenuContent.data.left.items.map(item => {
                              return (
                                <ListItem key={item.id} disableGutters>
                                  <Link href="#">{item.title}</Link>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Grid>
                        <Grid item xs={4}>
                          <List>
                            <ListItem disableGutters>
                              <StyledListItemText primary={submenuContent.data.center.title}></StyledListItemText>
                            </ListItem>
                            {submenuContent.data.right.items.map(item => {
                              return (
                                <ListItem key={item.id} disableGutters>
                                  <Link href="#">{item.title}</Link>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Grid>
                        <Grid item xs={4}>
                          <List>
                            <ListItem disableGutters>
                              <StyledListItemText primary={submenuContent.data.right.title}></StyledListItemText>
                            </ListItem>
                            {submenuContent.data.right.items.map(item => {
                              return (
                                <ListItem key={item.id} disableGutters>
                                  <Link href="#">{item.title}</Link>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* TODO: replace the SubmenyImage component with the banner component */}
                    {/* <Grid item xs={4}>
                      {submenuContent.data.side.items.map(item => {
                        return (
                          <Box key={item.id}>
                            <SubmenuImage key={item.id} url={item.url}></SubmenuImage>
                          </Box>
                        );
                      })}
                    </Grid> */}
                  </Grid>
                </Box>
              </Container>
            </StyledSubMenu>
          )}
        </TabPanel>
      </Box>
    </>
  );
};
export default SubMenu;
