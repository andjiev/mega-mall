import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';

import { BreadCrumbs } from 'components/breadcrumbs';
import { Grid, Box, Hidden } from '@material-ui/core';
import { Navigation } from './components/navigation';
import { Display } from './components/display';
import { MenuItem } from 'lib/data';
import { ROUTES } from 'consts';
import { BreadCrumb } from 'lib/models';
import { translate } from 'lib/translate';

interface CategoryPageProps extends RouteComponentProps<{ type: string }> {
  menuItems: MenuItem[];
}

const _CategoryPage = (props: CategoryPageProps) => {
  const [categoryItem, setCategoryItem] = useState<MenuItem | undefined>(undefined);
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumb[]>([]);

  useEffect(() => {
    if (props.menuItems.length > 0) {
      const categoryItem = props.menuItems.find(x => x.link === props.location.pathname);

      if (categoryItem) {
        const breadCrumbs: BreadCrumb[] = [
          { key: ROUTES.MAIN, value: translate('MegaMall_Breadcrumbs_Home', 'Почетна') },
          { key: categoryItem.link, value: categoryItem.title }
        ];

        setCategoryItem(categoryItem);
        setBreadCrumbs(breadCrumbs);
      }
    }
  }, []);

  return (
    <>
      {categoryItem && (
        <>
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <Box>
            <Grid container>
              <Hidden xsDown>
                <Grid item md={4} lg={3} xl={2}>
                  <Navigation categoryItem={categoryItem} />
                </Grid>
              </Hidden>
              <Grid item xs={12} md={8} lg={9} xl={10}>
                <Display categoryItem={categoryItem} />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({});

const mapStateToProps = (state: ApplicationState) => {
  return {
    menuItems: state.shared.menuItems
  };
};

const CategoryPage = connect(() => mapStateToProps, mapDisptachToProps)(_CategoryPage);
export default CategoryPage;
