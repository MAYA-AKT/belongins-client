import { createBrowserRouter } from "react-router";
import Root from "../componants/Root";
import Home from "../pages/Home";
import LostFound from "../pages/LostFound";
import AddItems from "../pages/AddItems";
import Authentication from "../componants/Authentication";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'lost-found',
               element:(
                <PrivateRoute>
                    <LostFound/>
                </PrivateRoute>
               ),
            },
            {
                path:'add-items',
                Component:AddItems
            }
        ]
    },
    {
        path:'auth',
        Component:Authentication,
        children:[
            {
               path:'/auth/signup',
               Component:SignUp
            },
            {
                path:'/auth/signin',
                Component:SignIn
                
            }
        ]
    }
])