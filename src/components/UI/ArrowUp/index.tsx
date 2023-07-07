import { useEffect, useState } from "react";
import c from "./styles.module.scss";

type Props = {};

const ArrowUp = (props: Props) => {
  const [arrowUp, setArrowUp] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY > 300) {
        setArrowUp(true);
      } else {
        setArrowUp(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <button
      onClick={() => {
        setArrowUp(false);
        window.scrollTo(0, 0);
      }}
      id="arrow_up"
      className={c.arrow}
      style={{ opacity: arrowUp ? 1 : 0 }}
    >
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="44.5"
          cy="44.5"
          r="44.5"
          transform="rotate(-90 44.5 44.5)"
          fill="#898989"
        ></circle>
        <path
          d="M42 35C42 36.6569 43.3431 38 45 38C46.6569 38 48 36.6569 48 35L42 35ZM47.1213 31.8787C45.9497 30.7071 44.0503 30.7071 42.8787 31.8787L23.7868 50.9706C22.6152 52.1421 22.6152 54.0416 23.7868 55.2132C24.9584 56.3848 26.8579 56.3848 28.0294 55.2132L45 38.2426L61.9706 55.2132C63.1421 56.3848 65.0416 56.3848 66.2132 55.2132C67.3848 54.0416 67.3848 52.1421 66.2132 50.9706L47.1213 31.8787ZM48 35L48 34L42 34L42 35L48 35Z"
          fill="white"
        ></path>
      </svg>
    </button>
  );
};

export default ArrowUp;
