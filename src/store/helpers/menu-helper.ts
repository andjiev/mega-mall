import { menuItems, MenuItem } from 'lib/data';

const getMenuItems = (): Promise<MenuItem[]> => {
  return new Promise((resolve, reject) => {
    const flatMenuItems = menuItems();

    const result = flatMenuItems
      .map(parent => {
        parent.children = flatMenuItems.filter(child => child.parentId === parent.id);
        return parent;
      })
      .filter(x => !x.parentId);

    resolve(result);
  });
};

export { getMenuItems };
