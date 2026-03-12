/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';

// UI Lib Components
import { Button, Modal } from 'react-bootstrap';

// UI Local Components
import { 
  FormProvider, 
  RHFMultipleSelect, 
  RHFSelect, 
  RHFTextField, 
  RHFUpload 
} from '../../../../hook-form';
import { useMovies } from '../../../../../hooks';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                         MOVIE ADD EDIT VIEW COMPONENT                      */
/* -------------------------------------------------------------------------- */
function MovieAddEditView({ currentMovie, open, onClose }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { addMovie, updateMovie } = useMovies();

/* ------------------------ FORM VALIDATION WITH YUP ------------------------ */
  const NewAuthSchema = Yup.object().shape({
    Poster: Yup.mixed().required("Movie image is required"),
    Plot: Yup.string().required("Movie description is required"),
    Title: Yup.string().required("Movie name is required"),
    Type: Yup.string().required("Type is required"),
    Genre: Yup.array().min(1, "At least one genre is required").required("Genre is required")
  });

  const defaultValues = useMemo(
    () => ({
      Poster: currentMovie?.Poster || "",
      Plot: currentMovie?.Plot || "",
      Title: currentMovie?.Title || "",
      Type: currentMovie?.Type || "",
      Genre: currentMovie?.Genre || []
    }), [currentMovie?.id]
  );

  const methods = useForm({
    resolver: yupResolver(NewAuthSchema),
    defaultValues
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

/* ------------------------------ HANDLE SUBMIT ----------------------------- */
  const handleAddEditMovie = handleSubmit(async (movieData) => {
    if (currentMovie) {
      await updateMovie(currentMovie.id, movieData);
      onClose();
      reset();
    } else {
      console.log('movieData', movieData);
      await addMovie(movieData);
      onClose();
      reset();
    };
    enqueueSnackbar('Movie saved successfully', { variant: 'success' });
  });

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Modal className="addEditMovieModal" show={open} onHide={onClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <h4>{currentMovie ? "Update Movie" : "Add Movie"}</h4>
      </Modal.Header>
      
      <Modal.Body>
        <FormProvider className="flex items-center flex-col" methods={methods} onSubmit={handleAddEditMovie}>
          <div className="w-full">
              <RHFUpload 
                name="Poster" 
                movieImg={currentMovie?.Poster}
              />
              <RHFTextField
                type="text"
                label="Title"
                name="Title"
                placeholder="Movie Title"
              />
              <RHFTextField
                type="text"
                label="Description"
                name="Plot"
                placeholder="Movie Description"
              />
              <div className="flex items-center gap-4">
                <RHFSelect 
                  label="Type"
                  name="Type"
                  options={["Movie", "Serie", "TV Show", "Documentary", "Other"]}
                />
                <RHFMultipleSelect 
                  label="Genre"
                  name="Genre"
                  placeholder="Select genres"
                  options={["Action", "Adventure", "Comedy", "Crime", "Fantasy", "Historical", "Horror", "Romance", "Sci-fi", "Thriller", "Western", "Animation", "Documentary", "Other"]}
                />
              </div>
          </div>
          <div className="flex justify-end w-full">
            <Button type="submit" disabled={isSubmitting}>
              {currentMovie ? "Update" : "Add"}
            </Button>
          </div>
        </FormProvider>
      </Modal.Body> 
    </Modal>
  )
};

export default MovieAddEditView;