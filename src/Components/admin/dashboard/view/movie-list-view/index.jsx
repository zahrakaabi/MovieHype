/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useCallback, useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

// Hooks & Lib
import { useBoolean, useMovies } from '../../../../../hooks';
import { endpoints } from '../../../../../lib/axios';
import { HOST_API } from '../../../../../constants/config-global';

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
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, setMovies } = useMovies();
  const editMovie = useBoolean();
  const { enqueueSnackbar } = useSnackbar();

/* --------------------------------- CONSTS --------------------------------- */
  const handleDeleteRow = useCallback(
    async (movieId) => {
      await axios.delete(`${HOST_API}${endpoints.movies.list}/${movieId}`);
      const newMovies = movies.filter((row) => row.id !== movieId);
      setMovies(newMovies);
      setSelectedMovie(null);
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
                  setSelectedMovie={setSelectedMovie}
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