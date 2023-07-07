import c from "./styles.module.scss";
import { Button, Link } from "@/components/UI";
import { useContext } from "react";
import themeContext from "@/theme";
type Props = {};

const PriceList = (props: Props) => {
  const { theme } = useContext(themeContext);

  return (
    <section className={c.section}>
      <div className="anchor" id="priceList" />
      <div className={c.container}>
        <h2 className={c.title}>Цены</h2>

        <ul className={c.priceList}>
          <li className={c.price}>
            <p className={c.price_title}>от 6.000₽</p>
            <p className={c.price_descr}>Одностраничный сайт</p>
            <a href="#bitrix24" className={c.price_special}>
              CRM в подарок
            </a>
            <Link
              href="#aboutOurService"
              type="fullfilled"
              className={c.price_button}
            >
              Что входит в цену
            </Link>
          </li>
          <li className={c.price}>
            <p className={c.price_title}>от 20.000₽</p>
            <p className={c.price_descr}>Многостраничный сайт</p>
            <a href="#bitrix24" className={c.price_special}>
              CRM в подарок
            </a>
            <Link
              href="#aboutOurService"
              type="fullfilled"
              className={c.price_button}
            >
              Что входит в цену
            </Link>
          </li>
          <li className={c.price}>
            <p className={c.price_title}>от 50.000₽</p>
            <p className={c.price_descr}>Сайт-Бизнес</p>
            <a href="#bitrix24" className={c.price_special}>
              CRM в подарок
            </a>
            <Link
              href="#aboutOurService"
              type="fullfilled"
              className={c.price_button}
            >
              Что входит в цену
            </Link>
          </li>
          <li className={c.price}>
            <p className={c.price_title}>от 100.000₽</p>
            <p className={c.price_descr}>Интернет-магазин</p>
            <a href="#bitrix24" className={c.price_special}>
              CRM в подарок
            </a>
            <Link
              href="#aboutOurService"
              type="fullfilled"
              className={c.price_button}
            >
              Что входит в цену
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PriceList;
