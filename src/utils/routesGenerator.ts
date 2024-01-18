import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

// create routes
export const routesGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item?.path && item?.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    } else if (item?.children) {
      item?.children.forEach((element) => {
        acc.push({
          path: element.path!,
          element: element.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
