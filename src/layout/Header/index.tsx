import { logo } from "@/assets/images";
import c from "./styles.module.scss";
import { Mail, MobileMenu as MobileMenuIcon, Phone } from "@/assets/icons";
import { Link, ThemeSwitcher } from "@/components/UI";
import { MobileMenu } from "@/components";
import { useEffect, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    function handler(e: Event) {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-selector=mobileMenu]")) {
        setMobileMenu(false);
      }
    }

    if (mobileMenu) {
      setTimeout(() => window.addEventListener("click", handler));
      return () => window.removeEventListener("click", handler);
    }
  }, [mobileMenu]);

  return (
    <header className={c.header}>
      <div className={c.container}>
        <div className={c.logoGroup}>
          <a href="/" className={c.logo}>
            <img src={logo} alt="Logo image" />
            <div className={c.logoText}>
              <p className={c.logoTextTitle}>weblab 420</p>
              <small className={c.logoTextSubtitle}>
                Студия разработки
                <br /> IT - продуктов
              </small>
            </div>
          </a>

          {/* DESKTOP */}
          <nav className={c.nav}>
            <ul>
              <li>
                <a href="#howWeWork">Как мы работаем</a>
              </li>
              <li>
                <a href="#priceList">Прайс-лист</a>
              </li>
              <li>
                <a href="#cases">Кейсы</a>
              </li>
              <li>
                <a href="#bitrixForm">Стать клиентом+</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={c.contactsGroup}>
          <Link
            href="https://project420.ru/login?next=%2Fprofile"
            className={c.loginButton}
            type="outlined"
          >
            Вход
          </Link>

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

        <div className={c.themeSwitcher}>
          <ThemeSwitcher />
        </div>

        {/* MOBILE */}
        <button
          className={c.mobileMenu}
          type="button"
          onClick={() => setMobileMenu(true)}
        >
          <MobileMenuIcon />
        </button>
      </div>
      <MobileMenu visible={mobileMenu} setVisible={setMobileMenu} />
    </header>
  );
};

export default Header;
