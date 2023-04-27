import { case1, case2, case3, case4 } from "@/assets/images";
import c from "./styles.module.scss";

type Props = {};

const Cases = (props: Props) => {
  return (
    <section id="cases">
      <div className={c.container}>
        <h2 className={c.title}>Кейсы</h2>
        <div className={c.casesGrid}>
          <div className={c.case}>
            <img className={c.caseBg} src={case1} alt="case 1" />
            <div className={c.caseHoverBox}>
              <p className={c.caseHoverBoxTitle}>
                ПЕРСОНАЛЬНЫЙ САЙТ ПСИХОЛОГА ЛИЛИИ КОРОЛЬ
              </p>
              <p className={c.caseHoverBoxInfo}>
                Срок: 1 день
                <br /> Бюджет: 7000
              </p>
              <a
                href="https://korollilia.top/zlg"
                target="_blank"
                className={c.caseHoverBoxLink}
              >
                Перейти на сайт
              </a>
            </div>
          </div>
          <div className={c.case}>
            <img className={c.caseBg} src={case2} alt="case 2" />
            <div className={c.caseHoverBox}>
              <p className={c.caseHoverBoxTitle}>ФАБРИКА НАТЯЖНЫХ СТЕЛЬ </p>
              <p className={c.caseHoverBoxInfo}>
                Срок: 2 дня
                <br />
                Бюджет: 7000
              </p>
              <a
                href="http://labelll.tilda.ws/1"
                target="_blank"
                className={c.caseHoverBoxLink}
              >
                Перейти на сайт
              </a>
            </div>
          </div>
          <div className={c.case}>
            <img className={c.caseBg} src={case3} alt="case 3" />
            <div className={c.caseHoverBox}>
              <p className={c.caseHoverBoxTitle}>ДЕТСКАЯ ОНЛАЙН-ШКОЛА</p>
              <p className={c.caseHoverBoxInfo}>
                Срок: 2 дня <br />
                Бюджет 8000
              </p>
              <a
                href="http://top.webdesign.tilda.ws/onlineschool"
                target="_blank"
                className={c.caseHoverBoxLink}
              >
                Перейти на сайт
              </a>
            </div>
          </div>
          <div className={c.case}>
            <img className={c.caseBg} src={case4} alt="case 4" />
            <div className={c.caseHoverBox}>
              <p className={c.caseHoverBoxTitle}>
                ПЕРСОНАЛЬНЫЙ САЙТ ТРЕНЕРА ПО ТАНЦАМ
              </p>
              <p className={c.caseHoverBoxInfo}>
                Срок: 3 дня
                <br />
                Бюджет: 5000
              </p>
              <a
                href="https://thepolefitness.com/home-ru"
                target="_blank"
                className={c.caseHoverBoxLink}
              >
                Перейти на сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
