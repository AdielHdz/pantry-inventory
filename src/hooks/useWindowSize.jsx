import { useState, useEffect } from "react";

function useWindowSize() {
  const [useWindowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function settingWindowSize() {
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: window.innerWidth,
      });
    }
    window.addEventListener("resize", settingWindowSize);
    settingWindowSize();

    return () => window.removeEventListener("resize", settingWindowSize);
  }, []);

  return useWindowSize;
}

export default useWindowSize;
