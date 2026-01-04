/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Custom Hooks
import { useFavorites } from '../../hooks';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                        FAVORITE MOVIE CARD COMPONENT                       */
/* -------------------------------------------------------------------------- */
function FavoriteMovieCard({ movie }) {
/* --------------------------------- CONSTS --------------------------------- */
  const { 
    Poster, 
    Title, 
    Year, 
    Runtime, 
    Genre, 
    Rate, 
    Metascore, 
    Actors,
    Plot 
  } = movie;
  const { removeFavorite } = useFavorites();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="favorite-movie-card flex flex-wrap items-center gap-5">
      <img className="img cover" src={Poster} alt={Title} />
      <div className="content">
        <h2 className="content__title">{Title}</h2>
        <span className="content__date-genre">{Year} | {Runtime} | {Genre}</span>
        <div className="flex items-center gap-4">
          <div className="content__rating flex items-center gap-2">
            <i className="fas fa-star"></i>
            <span>{Rate}</span>
          </div>
          <div className="content__metascore flex items-center gap-2">
            <span><span className="styled">{Metascore}</span> Meatscore</span>
          </div>
        </div>
        <div className="content__actors flex items-center flex-wrap gap-4">
          <span>Actors : </span>
          <ul className="flex flex-wrap gap-2">
            {Actors.split(',').map((actor, index) => <li key={index}>{actor}</li>)}
          </ul>
        </div>
        <p className="content__description">{Plot}</p>
        <button className="content__remove" 
        type="button" 
        title="Remove from favorites"
        aria-label="remove from favorites"
        onClick={() =>removeFavorite(movie.id)}>
          Remove from favorites
        </button>
      </div>
    </div>
  )
};

export default FavoriteMovieCard;