/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import MovieModal from './movie-modal';
import { useBoolean } from '../../hooks';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            MOVIE CARD COMPONENT                            */
/* -------------------------------------------------------------------------- */
function MovieCard({ movie }) {
/* --------------------------------- CONSTS --------------------------------- */
    const { Title, Poster, Year, Rate } = movie;
    const viewMovie = useBoolean();


    console.log('value', viewMovie)

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
        <div className="movie w-full">
            <div className="movie__img cursor-pointer" onClick={viewMovie.onTrue}>
                <img className="cover" src={Poster} alt={Title} />
            </div>
            <p className="movie__title">{Title}</p>
            <div className="flex justify-between items-center">
                <span className="movie__year">{Year}</span>
                <div className="movie__icons flex items-center">
                <button type="button" title="Add to favorites" aria-label="Add to favorites">
                    <span><i className="fas fa-heart transition"></i></span>
                </button>
                <button type="button" title="View details" aria-label="View details">
                    <span><i className="fas fa-eye transition"></i></span>
                </button>
                <div className="movie__rating flex items-center cursor-pointer">
                    <span><i className="fas fa-star transition"></i></span>
                    <span>{Rate}</span>
                </div>
                </div>
            </div>
        </div>

        {viewMovie.value && <MovieModal 
            movie={movie} 
            open={viewMovie.value}
            onClose={viewMovie.onFalse} />
        }
    </>
  )
};

export default MovieCard;