import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
};
