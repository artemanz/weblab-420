import { useContext, useEffect, useMemo, useRef } from "react";
import c from "./styles.module.scss";
import themeContext from "@/theme";
import { formGirlDark, formGirlLight } from "@/assets/images";
import { Telegram, Whatsapp } from "@/assets/socials";

type Props = {};

const BitrixForm = (props: Props) => {
  const { theme } = useContext(themeContext);
  const container = useRef<HTMLDivElement>(null);

  const forms = useMemo(() => {
    const darkForm = document.getElementById("bFormDark");
    const lightForm = document.getElementById("bFormLight");

    return { dark: darkForm, light: lightForm };
  }, []);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      if (theme == "dark" && forms.dark)
        container.current.insertAdjacentElement("afterbegin", forms.dark);
      if (theme == "light" && forms.light)
        container.current.insertAdjacentElement("afterbegin", forms.light);
    }
  }, [theme]);

  return (
    <section className={c.section}>
      <div className="anchor" id="bitrixForm" />
      <div className={c.container}>
        <div ref={container} className={c.formContainer}></div>

        <div className={c.description}>
          <h2 className={c.description_title}>
            Прокачайте свой бизнес в интернете!
          </h2>
          <p className={c.description_subtitle}>
            Получите потрясающие сайт и социальные сети от опытных дизайнеров и
            разработчиков.
          </p>
          <ul className={c.description_socials}>
            <li className={c.description_social}>
              <a target="_blank" href="https://t.me/weblab420ru">
                <Telegram color="var(--color-focus)" />
              </a>
            </li>
            <li className={c.description_social}>
              <a target="_blank" href="https://wa.me/79014200420?text=">
                <Whatsapp color="var(--color-focus)" />
              </a>
            </li>
          </ul>
        </div>

        <ul className={c.mobileSocials}>
            <li className={c.mobileSocial}>
              <a target="_blank" href="https://t.me/weblab420ru">
                <Telegram color="var(--color-focus)" />
              </a>
            </li>
            <li className={c.mobileSocial}>
              <a target="_blank" href="https://wa.me/79014200420?text=">
                <Whatsapp color="var(--color-focus)" />
              </a>
            </li>
          </ul>
      </div>
    </section>
  );
};

export default BitrixForm;
