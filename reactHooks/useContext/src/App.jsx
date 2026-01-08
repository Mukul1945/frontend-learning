import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>useContext Theme Example</h1>
      <ThemeButton />
    </div>
  );
}

export default App;
