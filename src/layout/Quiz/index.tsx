import { useRef, useEffect } from "react";
import c from "./styles.module.scss";

type Props = {};

const Quiz = (props: Props) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const quiz = document.getElementById("marquiz");
    if (container.current && quiz) {
      container.current.innerHTML = "";
      container.current.insertAdjacentElement("afterbegin", quiz);
      quiz.style.visibility = 'visible'
    }
  }, []);

  return (
    <section className={c.section}>
      <div className="anchor" id="quiz" />
      <div className={c.container}>
        <h2 className={c.title}>Анкета на создание сайта</h2>
        <div ref={container} className={c.formContainer}></div>
      </div>
    </section>
  );
};

export default Quiz;
