import RootLayout from "../RootLayout";
import {createRootRoute} from "@tanstack/react-router";
import { authRoute } from "./auth_route";
import { dashboardRoute } from "./dashboard_route";
import {homePageRoute} from "./homepage_route";
import {initialCheckAuth} from "../api/persistent_auth.js";

export const rootRoute=createRootRoute({
    component: RootLayout,
    beforeLoad:initialCheckAuth,
});

export const routeTree=rootRoute.addChildren([
    authRoute,
    dashboardRoute,
    homePageRoute
]);