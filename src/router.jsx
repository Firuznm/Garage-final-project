import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/website/main/pages/Home";
import About from "./layouts/website/main/pages/About";
import MainLayout from "./layouts/website/main/MainLayout";
import Details from "./layouts/website/main/pages/Details";
import AllProducts from "./layouts/website/main/pages/AllProducts";


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
     
    ],
  },
 
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;   
};