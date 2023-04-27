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
                  <a onClick={() => setVisible(false)} href="#priceList">
                    Прайс-лист
                  </a>
                </li>
                <li>
                  <a onClick={() => setVisible(false)} href="#cases">
                    Кейсы
                  </a>
                </li>
                <li>
                  <a onClick={() => setVisible(false)} href="#bitrixForm">
                    Стать клиентом+
                  </a>
                </li>
              </ul>
            </nav>

            <Link
              href="https://project420.ru/login?next=%2Fprofile"
              className={c.loginButton}
              type="outlined"
            >
              Вход
            </Link>

            <div className={c.footer}>
              <ThemeSwitcher />

              <div className={c.contact}>
                <a className={c.contactLink} href="tel:+74993254202">
                  <Phone />
                  +7 (499) 325-42-02
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
