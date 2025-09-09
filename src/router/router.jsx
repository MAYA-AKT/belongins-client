import { createBrowserRouter } from "react-router";
import Root from "../componants/Root";
import Home from "../pages/Home";
import LostFound from "../pages/LostFound";
import AddItems from "../pages/AddItems";
import Authentication from "../componants/Authentication";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import ItemsDetails from "../pages/ItemsDetails";
import axios from "axios";
import MyItems from "../pages/MyItems";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'lost-found',
                loader:()=> axios.get(`${import.meta.env.VITE_apiUrl}/all-items`),
                element: (
                   
                        <LostFound />
                    
                ),
                hydrateFallbackElement: <p>Error</p>
            },
            {
                path: 'details/:id',
                loader: ({ params }) => axios.get(`${import.meta.env.VITE_apiUrl}/item-details/${params.id}`),
                element: (
                    <PrivateRoute>
                        <ItemsDetails />
                    </PrivateRoute>
                ),
                hydrateFallbackElement: <p>Error</p>
            },
            {
                path: 'add-items',
                Component: AddItems
            },
            {
                path:'my-items',
                Component:MyItems
            }
        ]
    },
    {
        path: 'auth',
        Component: Authentication,
        children: [
            {
                path: '/auth/signup',
                Component: SignUp
            },
            {
                path: '/auth/signin',
                Component: SignIn

            }
        ]
    }
])