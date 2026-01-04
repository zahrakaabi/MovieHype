/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useMemo } from "react";

// UI Local Components
import { FavoriteMovieCard } from "../../Components";

// Custom Hooks
import { useFavorites, useSearch } from "../../hooks";

/* -------------------------------------------------------------------------- */
/*                               FAVORITES PAGE                               */
/* -------------------------------------------------------------------------- */
function Favorites() {
/* ---------------------------------- HOOKS --------------------------------- */
  const { search } = useSearch();
  const { favorites } = useFavorites();
  
  const filteredFavorites = useMemo(() => {
    return Object.values(favorites).filter((movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase())
    );
  }, [favorites, search]);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="favorites wrapper seperation">
      {filteredFavorites.map((movie) => <FavoriteMovieCard key={movie.id} movie={movie} />)}
    </div>
  )
};

export default Favorites;