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
      {isRegister && <div className="fields-wrapper flex gap-4">
        <RHFTextField
          type="text"
          label="First name"
          name="firstName"
          placeholder="First name"
        />
        <RHFTextField
          type="text"
          label="Last name"
          name="lastName"
          placeholder="Last name"
        />
      </div>}
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