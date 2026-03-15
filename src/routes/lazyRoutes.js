/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { lazy } from "react";

/* -------------------------------------------------------------------------- */
/*                                LAZY LOADING                                */
/* -------------------------------------------------------------------------- */
export const Home = lazy(() => import('../pages/home'));
export const Favorites = lazy(() => import('../pages/favorites'));
export const Admin = lazy(() => import('../pages/admin'));