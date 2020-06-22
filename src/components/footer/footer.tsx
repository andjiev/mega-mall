import React from 'react';

import { StyledList, StyledFooter, StyledCopyright, StyledDivider, StyledImage } from './footer.styles';
import { Container, Grid, Box, Typography, ListItem, Hidden } from '@material-ui/core';
import { StyledLink } from 'components/styled-link';
import { footerItems, IFooterItem } from './footer.data';

const Footer = () => {
  const renderItem = (item: IFooterItem) => {
    return (
      <Box>
        <StyledList>
          <Typography variant="body1">
            {item.header.src ? (
              <StyledImage src={item.header.src}></StyledImage>
            ) : item.header.title ? (
              <StyledLink href={item.header.link}>{item.header.title}</StyledLink>
            ) : (
              <Box component="span">{item.header.title}</Box>
            )}
          </Typography>
          <Box mt={1}>
            {item.links.map((linkItem, index) => {
              return (
                <ListItem key={index} disableGutters>
                  <Typography variant="body2">
                    <StyledLink href={linkItem.link}>{linkItem.title}</StyledLink>
                  </Typography>
                </ListItem>
              );
            })}
          </Box>
        </StyledList>
      </Box>
    );
  };
  //TODO add fonts and sizes. . .
  return (
    <>
      <StyledFooter pt={3} pb={2}>
        <Container>
          {/* for large devices */}
          <Hidden smDown>
            <Box>
              <Grid container justify="space-between">
                {footerItems.reduce((prev: JSX.Element | null, _, index: number, arr: IFooterItem[]) => {
                  return (
                    <>
                      {prev}
                      {!(index % 2) && (
                        <Grid item>
                          {renderItem(arr[index])}
                          <Box mt={2}>{renderItem(arr[index + 1])}</Box>
                        </Grid>
                      )}
                    </>
                  );
                }, null)}
              </Grid>
            </Box>
          </Hidden>

          {/* for small devices */}
          <Hidden mdUp>
            <Box mb={2}>
              <Box color="white">Logo</Box>
              <Box mt={2}>
                <Grid container>
                  {footerItems.slice(2).map((item, index) => {
                    return (
                      <Grid key={index} item xs={6}>
                        <Box mt={1} mb={1}>
                          <Typography variant="h6">
                            <StyledLink href={item.header.link}>{item.header.title}</StyledLink>
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              <Box mt={2}>{renderItem(footerItems[1])}</Box>
              <Box>
                <Grid container justify="center" alignItems="center">
                  <Typography variant="h6">
                    <Box component="span" color="white" textAlign="center">
                      {footerItems[0].header.title}
                    </Box>
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Hidden>
        </Container>

        {/* copyright */}
        <StyledDivider />
        <Box mt={2}>
          <Grid container justify="center" alignItems="center">
            <StyledCopyright component="span">&copy;2020-2020 E-commerce Сите права задржани.</StyledCopyright>
          </Grid>
        </Box>
      </StyledFooter>
    </>
  );
};

export default Footer;
