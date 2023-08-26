import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages";
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
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);
