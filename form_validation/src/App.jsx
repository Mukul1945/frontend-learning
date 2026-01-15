import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("All filed are required");
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    console.log({ name, email });
    alert("Form submitted successfully!");
    setName("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
