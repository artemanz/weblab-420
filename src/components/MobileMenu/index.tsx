import { logo } from "@/assets/images";
import c from "./styles.module.scss";
import { Button, Link, ThemeSwitcher } from "../UI";
import { Close, Mail, Phone } from "@/assets/icons";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect } from "react";

type Props = {
  visible: boolean;
  setVisible(state: boolean): void;
};

const variants: Variants = {
  visible: {
    y: 0,
    transition: { bounce: false },
  },
  invisible: {
    y: "-100vh",
  },
};

const MobileMenu = ({ visible, setVisible }: Props) => {
  useEffect(() => {
    if (visible) {
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = "";
      };
    }
  }, [visible]);

  return (
    <div className={c.mobileMenu}>
      {visible && <div className={c.backdrop} />}
      <AnimatePresence>
        {visible && (
          <motion.div
            data-selector="mobileMenu"
            variants={variants}
            initial="invisible"
            animate="visible"
            exit="invisible"
            transition={{ duration: 0.3 }}
            className={c.menu}
          >
            <div className={c.header}>
              <div className={c.logo}>
                <img src={logo} alt="Logo image" />
                <div className={c.logoText}>
                  <p className={c.logoTextTitle}>weblab 420</p>
                  <small className={c.logoTextSubtitle}>
                    Студия разработки
                    <br /> IT - продуктов
                  </small>
                </div>
              </div>

              <button type="button" onClick={() => setVisible(false)}>
                <Close />
              </button>
            </div>

            <nav className={c.nav}>
              <ul>
                <li>
                  <a onClick={() => setVisible(false)} href="#howWeWork">
                    Как мы работаем
                  </a>
                </li>
                <li>
                  <a onClick={() => setVisible(false)} href="#portfolio">
                  Портфолио
                  </a>
                </li>
                <li>
                  <a onClick={() => setVisible(false)} href="#banner">
                  Акции
                  </a>
                </li>
                <li>
                  <a onClick={() => setVisible(false)} href="#priceList">
                  Цены
                  </a>
                </li>
                <li>
                  <a onClick={() => setVisible(false)} href="#reviews">
                  Отзывы
                  </a>
                </li>
              </ul>
            </nav>

            <Link
              href="#bitrixForm"
              className={c.loginButton}
              type="outlined"
              onClick={() => setVisible(false)}
            >
              Заказать сайт
            </Link>

            <div className={c.footer}>
              <ThemeSwitcher />

              <div className={c.contact}>
                <a className={c.contactLink} href="tel:+79014200420">
                  <Phone />
                  +7 (901) 420-0-420
                </a>
                <a className={c.contactLink} href="mailto:mail@project420.ru">
                  <Mail />
                  mail@project420.ru
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
