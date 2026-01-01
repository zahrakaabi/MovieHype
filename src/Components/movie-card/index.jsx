/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            MOVIE CARD COMPONENT                            */
/* -------------------------------------------------------------------------- */
function MovieCard({ movie }) {
/* --------------------------------- CONSTS --------------------------------- */
    const { Title, Poster, Year, Rate } = movie;

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="movie w-full">
        <img className="movie__img cover cursor-pointer" src={Poster} alt={Title} />
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
  )
};

export default MovieCard;