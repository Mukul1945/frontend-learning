import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchDebounce() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText) {
      console.log("API Call:", debouncedText);
    }
  }, [debouncedText]);

  return (
    <div>
      <h2>Debounce Search</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
