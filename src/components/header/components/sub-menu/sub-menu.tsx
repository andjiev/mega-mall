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
    position: 'absolute'
  },
  tabs: {
    borderRight: `1px solid #355C7C`,
    overflow: 'visible'
  },
  tabpanel: {
    padding: 0,
    width: '100%'
  }
}));

//===============================

interface ISubMenuProps {
  categoryType?: CategoryTypes;

  onSubmenuChange: (value: boolean) => void;
}

const SubMenu = (props: ISubMenuProps) => {
  // Vertical tabs
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  //=========================
  const [submenuContent, setSubmenuContent] = useState<ISubmenuItem | undefined>(undefined);

  useEffect(() => {
    if (props.categoryType) {
      setSubmenuContent(submenuItems.find(x => x.type === props.categoryType));
    }
  }, [props.categoryType]);

  return (
    <>
      <div className={classes.root}>
        <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs}>
          {/* //TODO: Dynamicaly assign tabs */}
          {/* {menuItems.map((item, index) => {
            <Tab label={item.title} {...a11yProps(index)} />
          })} */}

          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>

        <TabPanel className={classes.tabpanel} value={value} index={0}>
          {submenuContent && (
            <StyledSubMenu>
              <Container>
                <Box>
                  <Grid container spacing={10} onMouseEnter={() => props.onSubmenuChange(true)} onMouseLeave={() => props.onSubmenuChange(false)}>
                    <Grid item xs={3}>
                      <List>
                        <ListItem disableGutters>
                          <StyledListItemText primary={submenuContent.data.left.title}></StyledListItemText>
                        </ListItem>
                        {submenuContent.data.left.items.map(item => (
                          <ListItem key={item.id} disableGutters>
                            <Link href="#">{item.title}</Link>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={3}>
                      <List>
                        <ListItem disableGutters>
                          <StyledListItemText primary={submenuContent.data.right.title}></StyledListItemText>
                        </ListItem>
                        {submenuContent.data.right.items.map(item => (
                          <ListItem key={item.id} disableGutters>
                            <Link href="#">{item.title}</Link>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={6}>
                      {submenuContent.data.side.items.map(item => (
                        <Box key={item.id}>
                          <SubmenuImage key={item.id} url={item.url}></SubmenuImage>
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </StyledSubMenu>
          )}
        </TabPanel>
      </div>
    </>
  );
};
export default SubMenu;
