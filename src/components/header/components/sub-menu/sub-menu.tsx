import React, { useEffect, useState } from 'react';

import { StyledSubMenu, StyledListItemText, SubmenuImage } from './sub-menu.styles';
import { List, Grid, Container, ListItem, Box } from '@material-ui/core';
import { submenuItems, ISubmenuItem } from './sub-menu.data';
import { StyledLink } from 'components/styled-link';
import { CategoryTypes } from 'lib/enums';

interface ISubMenuProps {
  categoryType?: CategoryTypes;

  onSubmenuChange: (value: boolean) => void;
}

const SubMenu = (props: ISubMenuProps) => {
  const [submenuContent, setSubmenuContent] = useState<ISubmenuItem | undefined>(undefined);

  useEffect(() => {
    if (props.categoryType) {
      setSubmenuContent(submenuItems.find(x => x.type === props.categoryType));
    }
  }, [props.categoryType]);

  return (
    <>
      {submenuContent && (
        <StyledSubMenu>
          <Container>
            <Box pt={3}>
              <Grid container spacing={10} onMouseEnter={() => props.onSubmenuChange(true)} onMouseLeave={() => props.onSubmenuChange(false)}>
                <Grid item xs={3}>
                  <List>
                    <ListItem disableGutters>
                      <StyledListItemText primary={submenuContent.data.left.title}></StyledListItemText>
                    </ListItem>
                    {submenuContent.data.left.items.map(item => (
                      <ListItem key={item.id} disableGutters>
                        <StyledLink href="#">{item.title}</StyledLink>
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
                        <StyledLink href="#">{item.title}</StyledLink>
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
    </>
  );
};
export default SubMenu;
