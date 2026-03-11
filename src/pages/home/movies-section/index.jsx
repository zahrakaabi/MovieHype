/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useMemo } from "react";

// Custom Hooks & Context
import { useMovies, useSearch } from "../../../hooks";

// UI Local Componsnts
import { EmptyState, MovieCard, MovieCardSkeleton } from "../../../Components";

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
      {!loading && filteredMovies?.length === 0 && (
        <EmptyState
          icon="😔"
          title="No movies found"
          description="No movies match your search criteria. Please try again with different keywords."
        />
      )}
    </div>
  )
};

export default MoviesSection;