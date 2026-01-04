/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useContext } from "react";

// Context
import { FavoritesContext } from "../../context";

/* -------------------------------------------------------------------------- */
/*                          useFavorites CUSTOM HOOK                          */
/* -------------------------------------------------------------------------- */
function useFavorites() {
/* -------------------------------- RENDERING ------------------------------- */
    return useContext(FavoritesContext);
};

export default useFavorites;