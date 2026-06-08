import "./IntroLoader.css";
import { useEffect, useState } from "react";

function IntroLoader({ onFinish }) {
  const [stage, setStage] = useState(1);

  useEffect(() => {

    const t1 = setTimeout(() => setStage(2), 2500);

    const t2 = setTimeout(() => setStage(3), 4500);

    const t3 = setTimeout(() => {
      document.querySelector(".intro-loader")
      .classList.add("zoom-out");
    }, 6500);

    const t4 = setTimeout(() => {
      onFinish();
    }, 7300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };

  }, [onFinish]);

  return (
    <div className="intro-loader">

      {stage === 1 && (
        <h1 className="typing-name">
          SNEHA
        </h1>
      )}

      {stage === 2 && (
        <div className="name-block">

          <h1 className="slide-left">
            SNEHA
          </h1>

          <h1 className="slide-top">
            M
          </h1>

          <h1 className="slide-right">
            PHILIP
          </h1>

        </div>
      )}

      {stage === 3 && (
        <div className="profession">

          <h2>
            FULL STACK DEVELOPER
          </h2>

          <p>
            AI • WEB • REACT • NODE
          </p>

        </div>
      )}

    </div>
  );
}

export default IntroLoader;