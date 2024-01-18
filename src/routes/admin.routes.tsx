import { ReactNode } from "react";
import AdminDemo1 from "../pages/admin/AdminDemo1";
import AdminDemo2 from "../pages/admin/AdminDemo2";
import AdminDemo3 from "../pages/admin/AdminDemo3";
import AdminDemo4 from "../pages/admin/AdminDemo4";
import { NavLink } from "react-router-dom";

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

// demo routes
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDemo1 />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <AdminDemo2 />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <AdminDemo3 />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <AdminDemo4 />,
      },
    ],
  },
];

// create ant design sidebar menu items
export const adminSidebarItems = adminPaths.reduce(
  (acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.path}</NavLink>,
      });
    } else if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((element) => {
          return {
            key: element.name,
            label: (
              <NavLink to={`/admin/${element.path}`}>{element.path}</NavLink>
            ),
          };
        }),
      });
    }

    return acc;
  },
  []
);
