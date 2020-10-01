import React from 'react';

import { StyledNavigation, StyledButton } from './navigation.styles';
import { Box, List, ListItem, Typography, Checkbox, Grid } from '@material-ui/core';
import { INavItem, navigationData } from './navigation.data';
import { translate } from 'lib/translate';

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const renderItem = (item: INavItem) => {
    return (
      <>
        <Box mt={1}>
          <Typography variant="h6">{item.header.title}</Typography>
        </Box>
        <Box>
          {item.links.map(val => (
            <Grid container alignContent="center" alignItems="center" key={val.title}>
              <Checkbox size="small" color="default" key={val.id} onChange={handleChange} inputProps={{ 'aria-label': 'checkbox with default color' }} />
              <Typography key={val.title}>{val.title}</Typography>
            </Grid>
          ))}
        </Box>
      </>
    );
  };
  return (
    <>
      <StyledNavigation>
        <Box p={3} pt={2}>
          <List>
            <Typography variant="h6">{translate('MegaMall_Navigation_Technolopgy', 'Технологија')}</Typography>
            <List>{translate('MegaMall_Navigation_Computers', 'Компјутери и опрема')}</List>
            <ListItem>{translate('MegaMall_Navigation_PC', 'Персонални компјутери')}</ListItem>
            <ListItem>{translate('MegaMall_Navigation_Laptop', 'Преносни компјутери')}</ListItem>
            <ListItem>{translate('MegaMall_Navigation_Equipment', 'Опрема за компјутери')}</ListItem>
            <ListItem>{translate('MegaMall_Navigation_Mice', 'Глувчиња')}</ListItem>
            <ListItem>{translate('MegaMall_Navigation_Keyboards', 'Тастатури')}</ListItem>
            <List>{translate('MegaMall_Navigation_Mobile', 'Мобилни телефони')}</List>
          </List>

          <Grid container>
            <Grid item alignContent="space-between">
              <Grid item>{navigationData.map(val => renderItem(val))}</Grid>
            </Grid>

            <StyledButton variant="outlined">{translate('MegaMall_Navigation_Show', 'види ги сите')}</StyledButton>
          </Grid>
        </Box>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
