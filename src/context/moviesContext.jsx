/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useMemo } from "react";

// Lib & Custom Hooks
import { useFetch } from "../hooks";
import { endpoints } from "../lib/axios";

/* -------------------------------------------------------------------------- */
/*                               MOVIES PROVIDER                              */
/* -------------------------------------------------------------------------- */
export const MoviesContext = createContext({
  movies: [],
  loading: false,
  error: null,
});

function MoviesProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
    const { data: movies, error, loading } = useFetch(endpoints.movies.list);

    const value = useMemo(
        () => ({ movies, error, loading }),
        [movies, error, loading]
    );

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
};

export default MoviesProvider;