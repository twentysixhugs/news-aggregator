import { useState, useLayoutEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query));

  useLayoutEffect(() => {
    const handleChange = () => {
      setMatches(window.matchMedia(query));
    };

    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
