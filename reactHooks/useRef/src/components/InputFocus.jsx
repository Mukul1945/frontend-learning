import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
