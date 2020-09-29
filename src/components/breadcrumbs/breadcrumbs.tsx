import React from 'react';

import { StyledBox, StyledLink } from './breadcrumbs.styles';
import { Box, Breadcrumbs, Grid, Link, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { BreadCrumb } from 'lib/models';

interface IProps {
  breadCrumbs: BreadCrumb[];
}

const _BreadCrumbs = (props: IProps) => {
  return (
    <>
      <StyledBox boxShadow={2}>
        <Grid container alignItems="center" style={{ height: '100%' }}>
          <Box pl={3}>
            <Breadcrumbs separator={<ArrowRightIcon fontSize="small" />}>
              {props.breadCrumbs.map((breadcrumb, index) =>
                index < props.breadCrumbs.length - 1 ? (
                  <StyledLink key={index} color="inherit" onClick={() => (window.location.href = breadcrumb.key)}>
                    <Typography variant="body2">{breadcrumb.value}</Typography>
                  </StyledLink>
                ) : (
                  <StyledLink key={index} onClick={() => (window.location.href = breadcrumb.key)}>
                    <Typography variant="body2">{breadcrumb.value}</Typography>
                  </StyledLink>
                )
              )}
            </Breadcrumbs>
          </Box>
        </Grid>
      </StyledBox>
    </>
  );
};

export default _BreadCrumbs;
