import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/website/main/pages/Home";
import About from "./layouts/website/main/pages/About";
import MainLayout from "./layouts/website/main/MainLayout";
import Details from "./layouts/website/main/pages/Details";
import AllProducts from "./layouts/website/main/pages/AllProducts";
import Auth from "./layouts/website/main/pages/Auth";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Admin from "./layouts/Dashboard/Admin";
import Product from "./layouts/Dashboard/Product";
import Orders from "./layouts/Dashboard/Orders";
import Brands from "./layouts/Dashboard/Brands";
import AllBasketProduct from "./layouts/website/main/pages/AllBasketProduct";
import { useContext, useEffect } from "react";
import { ProfileCall } from "./services/Auth";
import { UserContext } from "./Contexts/AuthContext";
import ProtectRoute from "./Helpers/ProtectRoute";
import AuthRoute from "./Helpers/AuthRoute";
import NotFound from "./layouts/website/main/pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "products",
                element: <AllProducts />,
            },
            {
                path: "products/:_id",
                element: <Details />,
            },
            {
                path: "all-basket-products",
                element: <AllBasketProduct />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "login",
                element: <Auth />,
            },
        ],
    },

    {
        path: "/admin",
        element: (
            <AuthRoute>
                <ProtectRoute>
                    <Dashboard />
                </ProtectRoute>
            </AuthRoute>
        ),
        children: [
            {
                path: "brands",
                element: <Brands />,
            },
            {
                path: "products",
                element: <Product />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
        ],
    },
    {
        path: "/adminlogin",
        element: <Admin />,
    },
]);

export const MainRouter = () => {
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        ProfileCall()
            .then(({ data }) => {
                setUser(data.data.user);
            })
            .catch(() => {
                setUser(false);
            });
    }, []);
    return <RouterProvider router={router} />;
};
