import { useEffect } from "react";
import { useThrottle } from "../hooks/useThrottle";

export default function ScrollThrottle() {
  const handleScroll = useThrottle(() => {
    console.log("Scroll event fired");
  }, 1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <h2>Scroll Down (Throttle)</h2>
    </div>
  );
}
