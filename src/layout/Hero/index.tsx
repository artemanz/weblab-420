import { Link, ThemeSwitcher } from "@/components/UI";
import c from "./styles.module.scss";
import { dark__heroImage, light__heroImage, logo } from "@/assets/images";
import { useContext, useMemo } from "react";
import theme from "@/theme";

type Props = {};

const Hero = () => {
  const { theme: t } = useContext(theme);
  const image = useMemo(
    () => (t == "dark" ? dark__heroImage : light__heroImage),
    [t]
  );

  return (
    <section className={c.section} id="hero">
      <div className={c.background} />
      <div className={c.container}>
        <div className={c.themeSwitcher}>
          <ThemeSwitcher />
        </div>
        <div className={c.offer}>
          <h1 className={c.title}>Создание сайтов по самым выгодным ценам</h1>
          <p className={c.subtitle}>
            При заказе любого сайта
            <br /> домен .ru В ПОДАРОК!
          </p>

          <Link className={c.button} href="#priceList" type="fullfilled">
            Выбрать сайт
          </Link>
        </div>
        <img className={c.image} src={image} alt="Hero image" />
      </div>
    </section>
  );
};

export default Hero;
