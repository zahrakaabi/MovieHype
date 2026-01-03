/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useMemo, useState } from "react";

// Lib & Custom Hooks
import { useFetch } from "../hooks";
import { endpoints } from "../lib/axios";

/* -------------------------------------------------------------------------- */
/*                            CREATE MOVIES CONTEXT                           */
/* -------------------------------------------------------------------------- */
export const MoviesContext = createContext({
    movies: [],
    loading: false,
    error: null,
    search: "",
    setSearch: () => {},
    filteredMovies: [],
});

/* -------------------------------------------------------------------------- */
/*                               MOVIES PROVIDER                              */
/* -------------------------------------------------------------------------- */
function MoviesProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
    const [search, setSearch] = useState("");
    const { data: movies, error, loading } = useFetch(endpoints.movies.list);

    const filteredMovies = useMemo(() => {
        return movies?.filter((movie) =>
            movie.Title.toLowerCase().includes(search.toLowerCase())
        );
    }, [movies, search]);

/* --------------------------------- MEMOIZE --------------------------------- */
    const value = useMemo(
        () => ({ movies, error, loading, search, setSearch, filteredMovies }),
        [movies, error, loading, search, filteredMovies]
    );

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
};

export default MoviesProvider;