import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {path: '/about/post', element: <h1>post page</h1>}
    ]
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
]);

const Routers = () => {
  return <RouterProvider router={route} />;  
};
export default Routers;
