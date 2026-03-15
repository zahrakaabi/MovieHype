/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

// UI Lib Components
import { Form } from "react-bootstrap";

// Images
import UPLOAD from "../../assets/images/upload_movie.png";
import { supabase } from "../../api/supabaseClient";

/* -------------------------------------------------------------------------- */
/*                            RHF UPLOAD COMPONENT                            */
/* -------------------------------------------------------------------------- */
function RHFUpload({ name, movieImg }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { control } = useFormContext();
  const imageInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

/* -------------------------------- CONSTANTS ------------------------------- */
  const handleImage = async (file, onChange) => {
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Invalid file type. Only PNG, JPG, JPEG are allowed.");
      return;
    };

    // Preview
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);

    // Upload to Supabase Storage and store URL
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from('movies-images')
      .upload(fileName, file);

    if (error) {
      alert('Image upload failed');
      return;
    };

    const { data } = supabase.storage
      .from('movies-images')
      .getPublicUrl(fileName);

    onChange(data.publicUrl);
  };

  const handleDrop = (e, onChange) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImage(e.dataTransfer.files[0], onChange);
    };
  };

  const handleClick = () => {
    imageInputRef.current?.click();
  };

  const handleFileChange = (e, onChange) => {
    if (e.target.files && e.target.files[0]) {
      handleImage(e.target.files[0], onChange);
    };
  };

/* --------------------------- RENDER PLACEHOLDER --------------------------- */
  const renderPlaceholder = (
    <div className="placeholder flex flex-col gap-3 items-center justify-center">
      <img className="placeholder__img" src={UPLOAD} alt="Upload" loading="lazy" />
      <div className="text-center space-y-1">
        <h2 className="text-lg font-semibold">Drop or Select file</h2>
        <p className="text-sm text-muted-foreground">
          Drop files here or click{" "}
          <span className="mx-1 text-primary underline cursor-pointer">
            browse
          </span>
          {" "}through your machine
        </p>
      </div>
    </div>
  );

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Group className="form-group grid w-full gap-3 mb-5">
          <Form.Label htmlFor={name}>Image</Form.Label>
          <div className="form-upload cursor-pointer flex items-center justify-center"
          id={name}
          onClick={handleClick}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, field.onChange)}
          role="button"
          aria-label="Upload an image">
            {preview || movieImg || null
              ? <img
                className="form-upload__img"
                src={preview || movieImg}
                alt={movieImg ? "Current Movie Image" : "Preview"}
              />
              : renderPlaceholder
            }
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              className="hidden pos-a"
              ref={imageInputRef}
              onChange={(e) => handleFileChange(e, field.onChange)}
            />
          </div>
          
          {error && (
            <Form.Control.Feedback type="invalid" className="d-block">
              {error?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      )}
    />
  );
};

export default RHFUpload;