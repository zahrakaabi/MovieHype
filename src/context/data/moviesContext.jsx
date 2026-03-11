/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useCallback, useMemo } from "react";

// Lib & Custom Hooks
import { useFetch } from "../../hooks";
import { supabase } from "../../api/supabaseClient";

/* -------------------------------------------------------------------------- */
/*                            CREATE MOVIES CONTEXT                           */
/* -------------------------------------------------------------------------- */
export const MoviesContext = createContext({
    movies: [],
    loading: false,
    error: null,
});

/* -------------------------------------------------------------------------- */
/*                               MOVIES PROVIDER                              */
/* -------------------------------------------------------------------------- */
function MoviesProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
    // Get Movies
    //if axios use this endpoints.movies.list
    const movieQuery = useMemo(() => 
        () => supabase.from('movies').select('*').order('id', { ascending: true }
    ), []);
    const { data: movies, setData: setMovies, error, loading } = useFetch(movieQuery);

    const addMovie = useCallback(async (formData) => {
        const { error } = await supabase.from('movies').insert([formData]);
        if (!error) setMovies((prev) => [...prev, formData]);
    }, []);

    const updateMovie = useCallback(async (id, formData) => {
        const { error } = await supabase.from('movies').update(formData).eq('id', id);
        if (!error) setMovies((prev) => prev.map((movie) => (movie.id === id ? { ...movie, ...formData } : movie)));
    }, []);

    const deleteMovie = useCallback(async (id) => {
        const { error } = await supabase.from('movies').delete().eq('id', id);
        if (!error) setMovies((prev) => prev.filter((movie) => movie.id !== id));
    }, []);

/* --------------------------------- MEMOIZE --------------------------------- */
    const value = useMemo(
        () => ({ movies, setMovies, error, loading, addMovie, updateMovie, deleteMovie }),
        [movies, setMovies, error, loading, addMovie, updateMovie, deleteMovie]
    );

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
};

export default MoviesProvider;