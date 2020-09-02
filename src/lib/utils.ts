import { MenuItem, menuItems } from './data';

const flattenMenu = (menuItems: MenuItem[]): MenuItem[] => {
  const items: MenuItem[] = [];
  menuItems.forEach(item => {
    items.push(item);

    if (item.children && item.children.length > 0) {
      items.push(...flattenMenu(item.children));
    }
  });

  return items;
};

const findParent = (menuItems: MenuItem[], parentId: number): MenuItem | undefined => {
  return flattenMenu(menuItems).find(x => x.id === parentId);
};

const findRootElements = (menuItems: MenuItem[]): MenuItem[] => {
  return flattenMenu(menuItems).filter(x => !x.parentId);
};

export { findParent, findRootElements };
