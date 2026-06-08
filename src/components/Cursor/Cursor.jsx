import { useEffect } from "react";
import "./Cursor.css";

function Cursor() {

  useEffect(() => {

    const cursor =
      document.querySelector(".custom-cursor");

    const moveCursor = (e) => {

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

    };

    document.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      document.removeEventListener(
        "mousemove",
        moveCursor
      );
    };

  }, []);

  return <div className="custom-cursor"></div>;
}

export default Cursor;