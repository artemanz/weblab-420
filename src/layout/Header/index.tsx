import { logo } from "@/assets/images";
import c from "./styles.module.scss";
import { Mail, MobileMenu as MobileMenuIcon, Phone } from "@/assets/icons";
import { Link } from "@/components/UI";
import { MobileMenu } from "@/components";
import { useEffect, useState } from "react";
import clsx from "clsx";

type Props = {
};

const Header = (props: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [screenStart, setScreenStart] = useState(window.scrollY < 120);

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

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY < 120) setScreenStart(true);
      else setScreenStart(false);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      onPointerOver={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      className={clsx(c.header, !active && !screenStart && c.inactive)}
    >
      <div className={c.container}>
        <div className={c.logoGroup}>
          <a href="/" className={c.logo}>
            <img src={logo} alt="Weblab logo" />
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
                <a href="#portfolio">Портфолио</a>
              </li>
              <li>
                <a href="#banner">Акции</a>
              </li>
              <li>
                <a href="#priceList">Цены</a>
              </li>
              <li>
                <a href="#reviews">Отзывы</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={c.contactsGroup}>
          <Link href="#bitrixForm" className={c.loginButton} type="outlined">
            Заказать сайт
          </Link>

          <div className={c.contact}>
            <a className={c.contactLink} href="tel:+79014200420">
              <Phone />
              +7 (901) 420-0-420
            </a>
            <a className={c.contactLink} href="mailto:mail@weblab420.ru">
              <Mail />
              mail@weblab420.ru
            </a>
          </div>
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
