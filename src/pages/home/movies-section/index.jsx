/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useMemo } from "react";

// Custom Hooks & Context
import { useMovies, useSearch } from "../../../hooks";

// UI Local Componsnts
import { MovieCard, MovieCardSkeleton } from "../../../Components";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          MOVIES SECTION COMPONENT                          */
/* -------------------------------------------------------------------------- */
function MoviesSection() {
/* ---------------------------------- HOOKS --------------------------------- */
  const { search } = useSearch();
  const { movies, loading } = useMovies();
  
  const filteredMovies = useMemo(() => {
    return movies?.filter((movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase())
    );
  }, [movies, search]);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="movies-container wrapper seperation flex flex-wrap justify-center">
      {loading 
        ? Array.from({ length: 8 }).map((_, i) => <MovieCardSkeleton key={i} />)
        : filteredMovies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      }
    </div>
  )
};

export default MoviesSection;