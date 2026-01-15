/* -------------------------------------------------------------------------- */
/*                                DEPENDNECIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Controller, useFormContext } from "react-hook-form";

// UI Lib Components
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                          RHF YEXY FIELD COMPOENNT                          */
/* -------------------------------------------------------------------------- */
function RHFTextField({type="text", label, name, placeholder}) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Group className="form-group mb-5 w-full">
          <Form.Label>{label}</Form.Label>

          <div className="flex">
            <Form.Control
              {...field}
              type={isPassword ? (showPassword ? "text" : "password") : type}
              placeholder={placeholder}
              isInvalid={!!error}
              {...(type === "number" && { valueAsNumber: true })}
            />

            {isPassword && <button className="toggle-password cursor-pointer" type="button" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <i className="fa fa-eye" /> : <i className="fa fa-eye-slash" />}
            </button>}
          </div>

          {error && <Form.Control.Feedback type="invalid">
            {error?.message}
          </Form.Control.Feedback>}
        </Form.Group>
      )}
    />
  )
};

export default RHFTextField;