import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/website/main/pages/Home";
import About from "./layouts/website/main/pages/About";
import MainLayout from "./layouts/website/main/MainLayout";
import Details from "./layouts/website/main/pages/Details";
import AllProducts from "./layouts/website/main/pages/AllProducts";
import Auth from "./layouts/website/auth/Auth";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Admin from "./layouts/Dashboard/Admin";
import Product from "./layouts/Dashboard/Product";
import Orders from "./layouts/Dashboard/Orders";
import HomeDash from "./layouts/Dashboard/Brands";
import Brands from "./layouts/Dashboard/Brands";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "home",
        element: <Home/>,
      },
       {
		     path:"about",
		     element:<About/>
	   },
     {
      path: "products",
      element: <AllProducts/>
     },
     {
      path: "products/:id",
      element: <Details/>
     },
     {
      path: "login",
      element: <Auth/>
     },
    ],
  },
 
  {
    path: "/admin",
    element: <Dashboard/>,
    children: [
      {
        path: "/admin",
        element: <Brands/>
      },
      {
        path: "/admin/brands",
        element: <Brands/>,
      },
      {
        path: "/admin/products",
        element: <Product/>,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
    ],
  },
  

]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;   
};