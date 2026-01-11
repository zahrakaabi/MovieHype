/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import { RHFTextField } from "../../hook-form";

/* -------------------------------------------------------------------------- */
/*                             AUTH FIELDS (FORM)                             */
/* -------------------------------------------------------------------------- */
function AuthFields({ isRegister }) {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="auth-fields w-full">
      <RHFTextField
        type="text"
        label="Email address"
        name="email"
        placeholder="name@example.com"
      />
      <RHFTextField
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
      />
      {isRegister && <RHFTextField
        type="password"
        label="Confirm password"
        name="confirmPassword"
        placeholder="Confirm password"
      />}
    </div>
  );
};

export default AuthFields;