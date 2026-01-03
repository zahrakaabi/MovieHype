/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Custom Hooks & Context
import { useMovies } from "../../../hooks";

// UI Local Componsnts
import { MovieCard } from "../../../Components";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          MOVIES SECTION COMPONENT                          */
/* -------------------------------------------------------------------------- */
function MoviesSection() {
/* ---------------------------------- HOOKS --------------------------------- */
  const { filteredMovies } = useMovies();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="movies-container container seperation flex flex-wrap justify-center">
      {filteredMovies?.map((movie) => <MovieCard key={movie.Title} movie={movie} /> )}
    </div>
  )
};

export default MoviesSection;