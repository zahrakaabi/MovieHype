/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useCallback, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                           useBoolean CUSTOM HOOK                           */
/* -------------------------------------------------------------------------- */
function useBoolean(defaultValue) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [value, setValue] = useState(!!defaultValue);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  const onToggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

/* -------------------------------- RENDERING ------------------------------- */
  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
};

export default useBoolean;