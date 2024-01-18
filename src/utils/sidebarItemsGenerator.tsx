import { TSidebarItem, TUserPath } from "../types";
import { NavLink } from "react-router-dom";

// create ant design sidebar menu items
export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.path}</NavLink>,
      });
    } else if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((element) => {
          return {
            key: element.name,
            label: (
              <NavLink to={`/${role}/${element.path}`}>{element.path}</NavLink>
            ),
          };
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
