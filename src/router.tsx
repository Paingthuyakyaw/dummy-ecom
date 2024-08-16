import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("../src/layout/app-layout")).default,
      }),
      children: [
        {
          index: true,
          lazy: async () => ({
            Component: (await import("./page/home")).default,
          }),
        },
        {
          path: "product",
          lazy: async () => ({
            Component: (await import("./page/product")).default,
          }),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
