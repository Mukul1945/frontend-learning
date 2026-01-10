import { useRef } from "react";

export function useThrottle(fn, delay) {
  const lastCall = useRef(0);

  return (...args) => {
    const now = Date.now();

    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      fn(...args);
    }
  };
}
