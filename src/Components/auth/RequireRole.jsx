/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Navigate } from "react-router-dom";

// UI Local Components
import { PageSkeleton } from "../skeletons";

// Hooks
import { useAuth } from "../../hooks";

/* -------------------------------------------------------------------------- */
/*                           REQUIRE ROLE COMPONENT                           */
/* -------------------------------------------------------------------------- */
export const RequireRole = ({ allowedRoles, children }) => {
/* ---------------------------------- HOOKS --------------------------------- */
  const { profile, loading } = useAuth();

  if (loading || !profile) return <PageSkeleton />;

  if (!allowedRoles.includes(profile?.role))
    return <Navigate to="/403" replace />;

/* -------------------------------- RENDERING ------------------------------- */
  return children;
};