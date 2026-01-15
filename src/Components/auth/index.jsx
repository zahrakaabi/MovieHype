/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// UI Lib Componnets
import { Button, Modal } from 'react-bootstrap';

// UI Local Components
import AuthFields from './auth-form/authFields';
import { FormProvider } from '../hook-form';

// Hooks & API
import { useBoolean, useAuth } from '../../hooks';
import { supabase } from '../../api/supabaseClient';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                               AUTH COMPONENT                               */
/* -------------------------------------------------------------------------- */
function Auth({ open, onClose }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const isRegister = useBoolean();
  const { setUser, setSession } = useAuth();
  const [authError, setAuthError] = useState(null);

/* ------------------------ FORM VALIDATION WITH YUP ------------------------ */
  const NewAuthSchema = Yup.object().shape({
    email: Yup.string().email("Invalid e-mail").required("E-mail is required"),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Must contain at least one number')
      .required('Password is required'),
    ...(isRegister.value && {
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string()
    })
  });

  const defaultValues = useMemo(
    () => ({
     email: "",
     password: "",
     confirmPassword: "",
     firstName: "",
     lastName: ""
    })
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
  const toggleAuthMode = () => {
    reset();
    isRegister.onToggle();
  };
  
  const handleSend = handleSubmit(async (formData) => {
    const { firstName, lastName, email, password } = formData;

    try {
      if (isRegister.value) {
        const { data, error } = await supabase.auth.signUp({
          email, 
          password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName,
            },
          },
        });
        if (error) {
          setAuthError(error.message);
          return;
        };

        alert(`Registration successful! Check your email (${email}) to confirm your account before logging in.`);

        reset();
        onClose();
        return;
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({email, password});
        if (error) {
          setAuthError(error.message);
          return;
        };
        
        alert(`Login successful! Welcome back, ${data.user.user_metadata.firstName || email}`);

        reset();
        onClose();
        return;
      };
    } catch (error) {
      setAuthError(error.message || "Something went wrong");
    };
  });

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Modal className="loginModal" show={open} onHide={onClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
       <FormProvider className="flex items-center flex-col" methods={methods} onSubmit={handleSend}>
        {authError && <div className="mb-4 text-danger error">{authError}</div>}
        <AuthFields isRegister={isRegister.value} />
        <Button type="submit" disabled={isSubmitting}>{isRegister.value ? 'Create an account' : 'Login'}</Button>
       </FormProvider>
      </Modal.Body> 
      <Modal.Footer className="justify-center">
        <div className="auth-mode text-center">
          <span>{!isRegister.value 
            ? "Don't have an account ?" 
            : "Already have an account ?"}
          </span> 
          <button className="cursor-pointer" 
          type="button"
          title={isRegister.value ? "Register": "Login"}
          aria-label={isRegister.value ? "Register": "Login"}
          onClick={toggleAuthMode}>
            {!isRegister.value ? "Register": "Login"}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
};

export default Auth;