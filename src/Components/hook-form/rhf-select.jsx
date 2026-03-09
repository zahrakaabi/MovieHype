/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

// UI Lib Components
import { Form } from "react-bootstrap";

// Hooks
import { useBoolean } from "../../hooks";
import RHFCheckbox from "./rhf-checkbox";

/* -------------------------------------------------------------------------- */
/*                                 RHF SELECT                                 */
/* -------------------------------------------------------------------------- */
export function RHFSelect({ name, label, options }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { control } = useFormContext();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Group className="form-group mb-5 w-full">
          <Form.Label htmlFor={name}>{label}</Form.Label>

          <Form.Select className="cursor-pointer" id={name} aria-label="Default select example" {...field}>
            {options?.map((option) => <option  
              className="cursor-pointer"
              key={option} 
              value={option}>
                {option}
              </option>
            )}
          </Form.Select>

          {error && <Form.Control.Feedback type="invalid">
            {error?.message}
          </Form.Control.Feedback>}
        </Form.Group>
      )}
    />
  )
};

/* -------------------------------------------------------------------------- */
/*                        RHF MULTIPLE SELECT COMPONENT                       */
/* -------------------------------------------------------------------------- */
export function RHFMultipleSelect({ name, label, placeholder, options }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { control } = useFormContext();
  const isMultipleSelectOpen = useBoolean();
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        isMultipleSelectOpen.onFalse();
      };
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Group ref={selectRef} className="form-group form-multi-select pos-r mb-5 w-full">
          <Form.Label htmlFor={name}>{label}</Form.Label>

          <div className={`form-multi-select__control w-full form-select cursor-pointer
            ${isMultipleSelectOpen.value ? "isOpen" : ""}`}
          aria-label="Default select example"
          onClick={isMultipleSelectOpen.onToggle}>
              <span>
                {field.value?.length > 0
                  ? field.value.join(", ")
                  : placeholder
                }
              </span>
          </div>

          {isMultipleSelectOpen.value && <div className="form-multi-select__dropdown w-full"
          aria-label="Select multiple options">
            {options?.map((option) => {
              const currentValue = field.value ?? [];
              const isChecked = currentValue.includes(option);
              const toggle = () => {
                const newValue = isChecked
                ? currentValue.filter((value) => value !== option)
                : [...currentValue, option];
                field.onChange(newValue);
              };

              return (
                <div key={option} 
                className="form-multi-select__option cursor-pointer" 
                id={`${name}-${option}`}
                role="button"
                onClick={toggle}>
                  <RHFCheckbox
                    label={option}
                    checked={isChecked}
                  />
                </div>
              );
            })}
          </div>
          }

          {error && <Form.Control.Feedback type="invalid">
            {error?.message}
          </Form.Control.Feedback>}
        </Form.Group>
      )}
    />
  )
};