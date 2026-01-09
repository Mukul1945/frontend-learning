import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
};

export default Home;
