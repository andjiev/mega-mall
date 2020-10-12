import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { AppDispatch } from '../..';
import ApplicationState from '../../store/application-state';

import { BreadCrumbs } from 'components/breadcrumbs';
import { Grid, Box, Hidden } from '@material-ui/core';
import { DisplayContainer } from './components/display';
import { Navigation } from './components/navigation';
import { BreadCrumb } from 'lib/models';
import { MenuItem } from 'lib/data';
import { translate } from 'lib/translate';
import { findParent, findElement } from 'lib/utils';
import { ROUTES } from 'consts';

interface IProps extends RouteComponentProps {
  menuItems: MenuItem[];
}

const ProductList = (props: IProps) => {
  const [categoryItem, setCategoryItem] = useState<MenuItem | undefined>(undefined);
  const [subCategoryItem, setSubCategoryItem] = useState<MenuItem | undefined>(undefined);
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumb[]>([]);

  useEffect(() => {
    if (props.menuItems.length > 0) {
      const subCategoryItem = findElement(props.menuItems, props.location.pathname);

      const getParentBreadcrumbs = (item: MenuItem): { key: string; value: string }[] => {
        if (item.parentId) {
          const parent = findParent(props.menuItems, item.parentId)!;
          const breadcrumbs = getParentBreadcrumbs(parent);

          breadcrumbs.push({ key: parent.link, value: parent.title });
          return breadcrumbs;
        }

        return [];
      };

      if (subCategoryItem && subCategoryItem.parentId) {
        const parent = findParent(props.menuItems, subCategoryItem.parentId)!;

        const breadCrumbs: BreadCrumb[] = [
          { key: ROUTES.MAIN, value: translate('MegaMall_Breadcrumbs_Home', 'Почетна') },
          ...getParentBreadcrumbs(subCategoryItem),
          { key: subCategoryItem.link, value: subCategoryItem.title }
        ];

        if (subCategoryItem.children && subCategoryItem.children.length > 0) {
          setCategoryItem(subCategoryItem);
        } else {
          setCategoryItem(parent);
          setSubCategoryItem(subCategoryItem);
        }

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
                  <Navigation categoryItem={categoryItem} subCategoryItem={subCategoryItem} />
                </Grid>
              </Hidden>
              <Grid item xs={12} md={8} lg={9} xl={10}>
                <DisplayContainer subCategoryItem={subCategoryItem ? subCategoryItem : categoryItem} />
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

const ProductListPage = connect(() => mapStateToProps, mapDisptachToProps)(ProductList);
export default ProductListPage;
