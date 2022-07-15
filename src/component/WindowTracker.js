import { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting up");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return function () {
      console.log("Clean up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1> Window width: {windowWidth}px</h1>;
}
