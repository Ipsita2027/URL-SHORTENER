import {createRoute} from "@tanstack/react-router"
import { rootRoute } from "./routeTree";
import Dashboard from "../pages/Dashboard";
import { checkAuth } from "../api/persistent_auth";


export const dashboardRoute=createRoute({
    getParentRoute:()=>rootRoute          ,
    path:"/dashboard",
    component:Dashboard,
    beforeLoad:checkAuth
}
);