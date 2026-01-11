/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useMemo } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// UI Lib Componnets
import { Button, Modal } from 'react-bootstrap';

// UI Local Components
import AuthFields from './auth-form/authFields';
import { FormProvider } from '../hook-form';

// Hooks
import { useBoolean } from '../../hooks';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                               AUTH COMPONENT                               */
/* -------------------------------------------------------------------------- */
function Auth({ open, onClose }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const isRegister = useBoolean();

/* ------------------------ FORM VALIDATION WITH YUP ------------------------ */
  const NewAuthSchema = Yup.object().shape({
    email: Yup.string().email("Invalid e-mail").required("E-mail is required"),
    password: Yup.string().required('Password is required'),
    ...(isRegister.value && {
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
    })
  });

  const defaultValues = useMemo(
    () => ({
     email: "",
     password: "",
     confirmPassword: ""
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
    console.log('data', formData);
  });

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Modal className="loginModal" show={open} onHide={onClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
       <FormProvider className="flex items-center flex-col" methods={methods} onSubmit={handleSend}>
        <AuthFields isRegister={isRegister.value} />
        <Button type="submit" disabled={isSubmitting}>{isRegister.value ? 'Create an account' : 'Login'}</Button>
       </FormProvider>
      </Modal.Body> 
      <Modal.Footer className="justify-center">
        <div className="auth-mode text-center">
          <span>{isRegister.value 
            ? "Don't have an account ?" 
            : "Already have an account ?"}
          </span> 
          <button className="cursor-pointer" 
          type="button"
          title={isRegister ? "Register": "Login"}
          aria-label={isRegister ? "Register": "Login"}
          onClick={toggleAuthMode}>
            {isRegister ? "Register": "Login"}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
};

export default Auth;