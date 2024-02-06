import AdminDemo1 from "../pages/admin/AdminDemo1";
import AdminDemo2 from "../pages/admin/AdminDemo2";
import AdminDemo3 from "../pages/admin/AdminDemo3";
import AdminDemo4 from "../pages/admin/AdminDemo4";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
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
        name: "Create Academic Semesters",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semesters",
        path: "academic-semesters",
        element: <AcademicSemester />,
      },
      {
        name: "Create Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
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
