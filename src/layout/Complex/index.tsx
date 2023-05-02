import { Link } from "@/components/UI";
import c from "./styles.module.scss";
import { complex } from "@/assets/images";

type Props = {};

const Complex = (props: Props) => {
  return (
    <section className={c.section} id="complex">
      <div className={c.container}>
        <h2 className={c.title}>Вместе дешевле!</h2>
        <div className={c.wrapper}>
          <div className={c.startGroup}>
            <p className={c.text}>Весь комплекс услуг за 12990₽</p>
            <Link href="https://www.weblab420.ru/payment" className={c.button} type="fullfilled">Купить комплекс услуг</Link>
          </div>

          <div className={c.endGroup}>
            <img src={complex} alt="Вместе дешевле" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complex;
