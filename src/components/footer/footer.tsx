import React from 'react';

import { StyledList, StyledFooter, StyledCopyright, StyledDivider, StyledImage } from './footer.styles';
import { Container, Grid, Box, Typography, ListItem, Hidden } from '@material-ui/core';
import { StyledLink } from 'components/styled-link';
import { footerItems, IFooterItem } from './footer.data';
import { translate } from 'lib/translate';
import { connect } from 'react-redux';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import { MenuItem, menuItems } from 'lib/data';

interface IFooter {
  menuItems: MenuItem[];
}

const Footer = (props: IFooter) => {
  const renderFooterItem = (item: IFooterItem) => {
    return (
      <Box>
        <StyledList>
          <Typography variant="body2">
            {item.header.src ? (
              <StyledImage src={item.header.src}></StyledImage>
            ) : item.header.title ? (
              <StyledLink placeToRender="footer" href={item.header.link}>
                {item.header.title}
              </StyledLink>
            ) : (
              <Box component="span">{item.header.title}</Box>
            )}
          </Typography>
          <Box mt={1}>
            {item.links.map((linkItem, index) => {
              return (
                <ListItem key={index} disableGutters>
                  <Box fontFamily="RobotoThin" fontWeight="300" fontSize="14px">
                    <StyledLink placeToRender="footer-link" href={linkItem.link}>
                      {linkItem.title}
                    </StyledLink>
                  </Box>
                </ListItem>
              );
            })}
          </Box>
        </StyledList>
      </Box>
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    return (
      <Box>
        <StyledList>
          {item.title && item.link && (
            <StyledLink placeToRender="footer" href={item.link}>
              {item.title}
            </StyledLink>
          )}
          {item.children &&
            item.children.slice(0, 3).map((child, index) => {
              return (
                <Box key={index} mt={2} fontFamily="RobotoThin" fontWeight="300" fontSize="14px">
                  <StyledLink placeToRender="footer-link" href={child.link}>
                    {child.title}
                  </StyledLink>
                </Box>
              );
            })}
        </StyledList>
      </Box>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    return (
      <Box>
        <StyledList>
          {item.title && item.link && (
            <StyledLink placeToRender="footer" href={item.link}>
              {item.title}
            </StyledLink>
          )}
        </StyledList>
      </Box>
    );
  };

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
                          {renderFooterItem(arr[index])}
                          <Box mt={2}>{renderFooterItem(arr[index + 1])}</Box>
                        </Grid>
                      )}
                    </>
                  );
                }, null)}
                {props.menuItems.reduce((prev: JSX.Element | null, _, index: number, arr: MenuItem[]) => {
                  return (
                    <>
                      {prev}
                      {!(index % 2) && (
                        <Grid item>
                          {renderMenuItem(arr[index])}
                          <Box mt={2}>{renderMenuItem(arr[index + 1])}</Box>
                          {}
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
              <StyledImage src={footerItems[0].header.src}></StyledImage>
              <Box mt={2}>
                <Grid container>
                  {props.menuItems.slice(0, 6).map((item, index) => {
                    return (
                      <Grid key={index} item xs={6}>
                        <Box mt={1} mb={1}>
                          <Typography variant="h6">
                            <StyledLink placeToRender="footer" href={item.link}>
                              {item.title}
                            </StyledLink>
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              <Box mt={2}>{renderFooterItem(footerItems[1])}</Box>
              <Box>
                <Grid container justify="center" alignItems="center">
                  <Typography variant="h6">
                    <Box component="span" color="white" textAlign="center">
                      {footerItems[0].links[0].title}
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
            <StyledCopyright component="span">&copy;2020-2020 {translate('MegaMall_Footer_Copyright', 'E-commerce Сите права задржани.')}</StyledCopyright>
          </Grid>
        </Box>
      </StyledFooter>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {
    menuItems: state.shared.menuItems
  };
};

const FooterContainer = connect(() => mapStateToProps, mapDisptachToProps)(Footer);

export default FooterContainer;
