/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { FormProvider as Form } from 'react-hook-form';

/* -------------------------------------------------------------------------- */
/*                           FORM PROVIDER COMPONENT                          */
/* -------------------------------------------------------------------------- */
function FormProvider({ children, methods, onSubmit }) {
  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormProvider;