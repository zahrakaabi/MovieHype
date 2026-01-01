/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useContext } from "react";

// Context
import { MoviesContext } from "../../../context";

// UI Local Componsnts
import { MovieCard } from "../../../Components";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          MOVIES SECTION COMPONENT                          */
/* -------------------------------------------------------------------------- */
function MoviesSection() {
/* ---------------------------------- HOOKS --------------------------------- */
  const { movies, loading } = useContext(MoviesContext);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="movies-container container seperation flex flex-wrap justify-center">
      {movies?.map((movie) => <MovieCard key={movie.Title} movie={movie} /> )}
    </div>
  )
};

export default MoviesSection;