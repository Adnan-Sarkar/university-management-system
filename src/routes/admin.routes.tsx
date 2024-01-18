import AdminDemo1 from "../pages/admin/AdminDemo1";
import AdminDemo2 from "../pages/admin/AdminDemo2";
import AdminDemo3 from "../pages/admin/AdminDemo3";
import AdminDemo4 from "../pages/admin/AdminDemo4";
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
