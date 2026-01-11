/* -------------------------------------------------------------------------- */
/*                                DEPENDNECIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Controller, useFormContext } from "react-hook-form";

// UI Lib Components
import { Form } from "react-bootstrap";

/* -------------------------------------------------------------------------- */
/*                          RHF YEXY FIELD COMPOENNT                          */
/* -------------------------------------------------------------------------- */
function RHFTextField({type="text", label, name, placeholder}) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { control } = useFormContext();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Group className="mb-5 w-full">
          <Form.Label>{label}</Form.Label>

          <Form.Control
            {...field}
            type={type}
            placeholder={placeholder}
            isInvalid={!!error}
            {...(type === "number" && { valueAsNumber: true })}
          />

          {error && <Form.Control.Feedback type="invalid">
            {error?.message}
          </Form.Control.Feedback>}
        </Form.Group>
      )}
    />
  )
};

export default RHFTextField;