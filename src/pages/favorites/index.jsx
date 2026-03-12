/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useCallback, useMemo, useState } from "react";

// UI Lib Components
import { Button } from "react-bootstrap";
import { enqueueSnackbar } from "notistack";

// UI Local Components
import { ConfirmDialog, EmptyState, FavoriteMovieCard } from "../../Components";

// Custom Hooks
import { useBoolean, useFavorites, useSearch } from "../../hooks";

/* -------------------------------------------------------------------------- */
/*                               FAVORITES PAGE                               */
/* -------------------------------------------------------------------------- */
function Favorites() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [currentMovie, setCurrentMovie] = useState(null);
  const { search } = useSearch();
  const confirmRemoveFavorite = useBoolean();
  const isFavoriteDeleted = useBoolean();
  const { favorites, removeFavorite } = useFavorites();
  
  const filteredFavorites = useMemo(() => {
    return Object.values(favorites).filter((movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase())
    );
  }, [favorites, search]);

  const handleRemoveFavorite = useCallback((movie) => {
    setCurrentMovie(movie);
    confirmRemoveFavorite.onTrue();
  }, []);

  const handleConfirmRemove = useCallback(async () => {
    if (!currentMovie) return;
    const deleted = await removeFavorite(currentMovie);
    if (deleted) enqueueSnackbar('Favorite removed successfully', { variant: 'success' });
    setCurrentMovie(null);
    confirmRemoveFavorite.onFalse();
  }, [currentMovie, removeFavorite, enqueueSnackbar]);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
      <div className="favorites wrapper seperation">
        {filteredFavorites.map((movie) => <FavoriteMovieCard 
          key={movie.id} 
          movie={movie}
          handleRemoveFavorite={handleRemoveFavorite}
        />)}
        {filteredFavorites.length === 0 && (
          <EmptyState
            icon="🎬"
            title="No favorites found"  
            description={`${search 
              ? "No favorites match your search." 
              : "You haven't added any favorites yet."
            }`}
          />
        )}
      </div>

      {confirmRemoveFavorite.value && (
        <ConfirmDialog
          open={confirmRemoveFavorite.value}
          onClose={() => {
            confirmRemoveFavorite.onFalse();
          }}
          title="Remove Favorite"
          content="Are you sure you want to remove this movie from your favorites?"
          action={
            <Button 
              variant="danger" 
              onClick={handleConfirmRemove}
            >
              Remove
            </Button>
          }
        />
      )}
    </>
  )
};

export default Favorites;