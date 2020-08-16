import React, { useEffect, useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { List, Grid, Container, ListItem, Box, Typography, Theme, Tabs, Tab } from '@material-ui/core';

import { StyledSubMenu, StyledListItemText, SubmenuImage, StyledTab, StyledIcons } from './sub-menu.styles';
import Link from '@material-ui/core/Link';

import { submenuItems, ISubmenuItem, submenuIcons } from './sub-menu.data';
import { StyledLink } from 'components/styled-link';
import { CategoryTypes } from 'lib/enums';
import { menuItems } from './../menu/menu.data';
import Banner from 'components/banner/banner';

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
    backgroundColor: '#F0F5FF',
    display: 'flex',
    flexDirecation: 'row',
    height: 300,
    padding: 0,
    overflowY: 'hidden',
    width: '100%',
    zIndex: 10,
    position: 'absolute'
  },
  wrapper: {
    alignItems: 'baseline'
  },
  tabs: {
    borderRight: `1px solid #355C7C`,
    overflow: 'visible',
    justifyContent: 'flex-start'
  },
  tabPanel: {
    padding: 0,
    width: '100%'
  },
  tabLabel: {
    fontFamily: 'OswaldBold',
    fontSize: '14px',
    textAlign: 'left',
    width: '500px',
    '& > span': {
      alignItems: 'baseline',
      textAlign: 'left'
    }
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
            return (
              <span key={index}>
                <StyledIcons src={submenuIcons[index].url} />
                <Tab key={index} value={item.type} className={classes.tabLabel} label={item.title} {...a11yProps(index)} />
              </span>
            );
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

                    <Grid item xs={4}>
                      <Box mt={4}>
                        <Banner size="menu" bgColor="#F0F5FF" imagesource="/assets/images/main/Najnovite-patiki-na-nike.jpg" />
                      </Box>
                    </Grid>
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
