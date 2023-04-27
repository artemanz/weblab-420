import { useContext, useEffect, useMemo, useRef } from "react";
import c from "./styles.module.scss";
import themeContext from "@/theme";
import { formGirlDark, formGirlLight } from "@/assets/images";

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
    <section className={c.section} id="bitrixForm">
      <div className={c.container}>
        <div ref={container} className={c.formContainer}></div>

        <div className={c.image}>
          <img src={theme == "dark" ? formGirlDark : formGirlLight} />
        </div>
      </div>
    </section>
  );
};

export default BitrixForm;
