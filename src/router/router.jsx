import { createBrowserRouter } from "react-router";
import Root from "../componants/Root";
import Home from "../pages/Home";
import LostFound from "../pages/LostFound";

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
                Component:LostFound
            }
        ]
    }
])