import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h3>Password</h3>

      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          style={{ flex: 1, padding: "8px" }}
        />

        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}


export default App
