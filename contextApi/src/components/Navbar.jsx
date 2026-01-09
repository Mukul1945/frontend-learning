import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "10px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Navbar</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Navbar;
