import { useState } from "react";

export function useInput(initialValue, validationFn) {
  const [enteredValue, setEnterValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);
  const isValid = validationFn(enteredValue);

  function handleInputChange(e) {
    setEnterValue(e.target.value);
    setDidEdit(true);
  }
  function handleInputBlur() {
    setDidEdit(false);
  }
  console.log("isValid",isValid)
  console.log("didEdit", didEdit)
  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !isValid,
  };
}
