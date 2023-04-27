import { Link, ThemeSwitcher } from "@/components/UI";
import c from "./styles.module.scss";
import { heroImageDark, heroImageLight, logo } from "@/assets/images";
import { useContext, useMemo } from "react";
import theme from "@/theme";

type Props = {
  setLoaded(state: boolean): void;
};

const Hero = ({ setLoaded }: Props) => {
  const { theme: t } = useContext(theme);
  const image = useMemo(
    () => (t == "dark" ? heroImageDark : heroImageLight),
    [t]
  );

  return (
    <section className={c.section} id="hero">
      <div className={c.lightBackground} />
      <div className={c.container}>
        <div className={c.offer}>
          <h1 className={c.title}>
            бизнес <br />в интернете
          </h1>
          <p className={c.subtitle}>
            Сайт и система продаж <br />
            за <span className={c.focus}>12990₽</span> через{" "}
            <span className={c.focus}> 3 дня!</span>
          </p>

          <Link className={c.button} href="#aboutOurService" type="fullfilled">
            Узнать подробнее
          </Link>
        </div>
        <img
          className={c.image}
          src={image}
          alt="Hero image"
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
