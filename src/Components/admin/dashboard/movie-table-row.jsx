/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages

/* -------------------------------------------------------------------------- */
/*                           MOVIE TABLE ROW COMPONENT                        */
/* -------------------------------------------------------------------------- */
function MovieTableRow({ movie, openEdit, setCurrentMovie, handleDeleteRow }) {
/* --------------------------------- CONSTS --------------------------------- */
  const { id, Title, Year, Type, Genre, Poster } = movie;

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <tr key={id}>
        <td className="movie-cell flex items-center">
            <img src={Poster} alt={Title} className="movie-poster" />
            <span className="movie-title">{Title}</span>
        </td>
        <td>{Year}</td>
        <td>{Type}</td>
        <td>{Genre}</td>
        <td>
            <button className="edit" type="button" aria-label='Edit movie' title="Edit movie"
            onClick={() => {
                openEdit();
                setCurrentMovie(movie);
            }}>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="delete" type="button" aria-label='Delete movie' title="Delete movie"
            onClick={() => handleDeleteRow(id)}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </td>
    </tr>
  )
};

export default MovieTableRow;