/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import { Button, Modal } from "react-bootstrap";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            MOVIE MODAL COMPONENT                           */
/* -------------------------------------------------------------------------- */
function MovieModal({ movie, open, onClose }) {
/* --------------------------------- CONSTS --------------------------------- */
  const { Title, Genre, Plot } = movie;

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Modal className="movieModal" show={open} onHide={onClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="movie-poster" style={{ backgroundImage: `url(${movie.Poster})` }}>
            <h4>{Title}</h4>
        </div>
        <div className="movie-details">
          <ul className="flex gap-2">
            {Genre.split(',').map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
          <p>{Plot}</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-start">
        <Button onClick={onClose}>GET STARTED</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default MovieModal;