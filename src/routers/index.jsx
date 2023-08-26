import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages";
import Blog from "../pages/blogs";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
