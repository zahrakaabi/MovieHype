/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

// Hooks & Lib
import { useBoolean, useMovies } from '../../../../../hooks';

// UI Local Components
import MovieTableRow from '../../movie-table-row';
import MovieAddEditView from '../movie-add-edit-view';
import { MovieTableSkeleton } from '../../movie-table-row-skeleton';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          MOVIE LIST VIEW COMPONENT                         */
/* -------------------------------------------------------------------------- */
function MovieListView() {
/* ---------------------------------- HOOKS --------------------------------- */
  const { movies, deleteMovie } = useMovies();
  const editMovie = useBoolean();
  const { enqueueSnackbar } = useSnackbar();

/* --------------------------------- CONSTS --------------------------------- */
  const handleDeleteRow = useCallback(
    async (movieId) => {
      await deleteMovie(movieId);
      enqueueSnackbar('Movie deleted successfully', { variant: 'success' });
    },
    [movies]
  );

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
      <div className="wrapper seperation">
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
            {!movies
              ? <MovieTableSkeleton rows={6} />
              : movies?.map((movie) => (
                <MovieTableRow
                  key={movie.id}
                  movie={movie}
                  openEdit={editMovie.onTrue}
                  handleDeleteRow={handleDeleteRow}
                />
              ))
            }
          </tbody>
        </table>
      </div>
      
      {editMovie.value && ( 
        <MovieAddEditView
          currentMovie={selectedMovie}
          open={editMovie.value}
          onClose={editMovie.onFalse} 
        />
      )}
    </>
  )
}

export default MovieListView;