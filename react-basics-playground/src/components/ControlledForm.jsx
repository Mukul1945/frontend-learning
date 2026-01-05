import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Enter name"
    />
  );
};

export default ControlledForm;
