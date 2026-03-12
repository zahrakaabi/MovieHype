/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Form } from "react-bootstrap";

/* -------------------------------------------------------------------------- */
/*                                RHF CHECKBOX                                */
/* -------------------------------------------------------------------------- */
function RHFCheckbox({ label, checked }) {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Form.Check
        type="checkbox"
        label={label}
        checked={checked}
        readOnly
      />
    </div>
  )
};

export default RHFCheckbox;