/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useCallback, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';

// Custom Hooks
import { useBoolean, useMovies, useSearch } from '../../../../../hooks';

// UI Lib Components
import { Button } from 'react-bootstrap';

// UI Local Components
import MovieTableRow from '../../movie-table-row';
import MovieAddEditView from '../movie-add-edit-view';
import { MovieTableSkeleton } from '../../movie-table-row-skeleton';
import { ConfirmDialog } from '../../../../custom-dialog';
import EmptyState from '../../../../empty-state';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          MOVIE LIST VIEW COMPONENT                         */
/* -------------------------------------------------------------------------- */
function MovieListView() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [currentMovie, setCurrentMovie] = useState(null);
  const { movies, deleteMovie } = useMovies();
  const editMovie = useBoolean();
  const confirmDeleteMovie = useBoolean();
  const { enqueueSnackbar } = useSnackbar();
  const { search } = useSearch();

/* --------------------------------- CONSTS --------------------------------- */
  const filteredMovies = useMemo(() => {
    if (!movies) return;
    return Object.values(movies).filter((movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase())
    );
  }, [movies, search]);
  
  const handleDeleteRow = useCallback((movie) => {
    setCurrentMovie(movie);
    confirmDeleteMovie.onTrue();
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    if (!currentMovie) return;

    const deleted = await deleteMovie(currentMovie); 
    if (deleted) enqueueSnackbar('Movie deleted successfully', { variant: 'success' });

    setCurrentMovie(null);
    confirmDeleteMovie.onFalse();
    
  }, [currentMovie]);

  const MOVIE_TITLE = movies?.find((movie) => movie?.id === currentMovie)?.Title || 'this';

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
      <div className="wrapper seperation">
        {filteredMovies?.length === 0 ? (
          <EmptyState
            icon="🎬"
            title="No movies found"
            description="Try adjusting your search or filter to find what you're looking for."
          />
        ) : (
          <>
            <div className="movie-list-header flex items-center justify-between mb-4">
              <h4>My movies list</h4>
              <Button className="add-movie" aria-label="Add movie" title="Add movie" onClick={() => {
                setCurrentMovie(null);
                editMovie.onTrue();
              }}>
                <span>+</span>
                Add Movie
              </Button>
            </div>
            <div className='table-responsive'>
              <table className="movie-list-table w-full">
                <thead>
                  <tr>
                    <th>Movie</th>
                    <th>Create at</th>
                    <th>Type</th>
                    <th>Genre</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!filteredMovies
                    ? <MovieTableSkeleton rows={6} />
                    : filteredMovies?.map((movie, index) => (
                      <MovieTableRow
                        key={index}
                        movie={movie}
                        setCurrentMovie={setCurrentMovie}
                        openEdit={editMovie.onTrue}
                        handleDeleteRow={handleDeleteRow}
                      />
                    ))
                  }
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      
      {editMovie.value && ( 
        <MovieAddEditView
          currentMovie={currentMovie}
          open={editMovie.value}
          onClose={editMovie.onFalse} 
        />
      )}

      {confirmDeleteMovie.value && (
        <ConfirmDialog 
          open={confirmDeleteMovie.value}
          onClose={() => {
            confirmDeleteMovie.onFalse();
          }}
          title="Delete Movie"
          content={
            <>
              Are you sure you want to delete <strong>{MOVIE_TITLE}</strong> movie?
            </>
          }
          action={
            <Button 
              variant="danger"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          }
        />
      )}
    </>
  )
}

export default MovieListView;