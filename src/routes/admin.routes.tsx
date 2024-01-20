import AdminDemo1 from "../pages/admin/AdminDemo1";
import AdminDemo2 from "../pages/admin/AdminDemo2";
import AdminDemo3 from "../pages/admin/AdminDemo3";
import AdminDemo4 from "../pages/admin/AdminDemo4";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
// demo routes
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDemo1 />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semesters",
        path: "academic-semesters",
        element: <AcademicSemester />,
      },
    ],
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
