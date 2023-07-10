import { Behance, Dribble, Telegram, Vk } from "@/assets/socials";
import c from "./styles.module.scss";
type Props = {};

const socials = [
  { id: 1, href: "https://dribbble.com/weblab420/about", icon: Dribble },
  { id: 2, href: "https://www.behance.net/weblab420", icon: Behance },
  { id: 3, href: "https://vk.com/weblab420", icon: Vk },
  { id: 4, href: "https://t.me/weblab420_ru", icon: Telegram },
];

const Footer = (props: Props) => {
  return (
    <footer className={c.footer}>
      <div className={c.container}>
        <div className={c.linksGroup}>
          <nav className={c.links}>
            <a href="#howWeWork">Как мы работаем</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#banner">Акции</a>
            <a href="#priceList">Цены</a>
            <a href="#reviews">Отзывы</a>
            <a href="#bitrixForm">Заказать сайт</a>
          </nav>

          <ul className={c.desktopSocials}>
            {socials.map((s) => (
              <li key={s.id}>
                <a className={c.socialIcon} href={s.href}>
                  {<s.icon />}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className={c.mobileSocials}>
          {socials.map((s) => (
            <li key={s.id}>
              <a className={c.socialIcon} href={s.href} target="_blank">
                {<s.icon />}
              </a>
            </li>
          ))}
        </ul>
        <div className={c.info}>
          <div className={c.infoAdress}>
            <a
              target="_blank"
              href="https://www.weblab420.ru/static/documents/LICENCE.pdf"
            >
              Лицензионное соглашение
            </a>
            <p>
              © 2023 ООО “ПРОЕКТ 420” 117342, Москва, ул. Бутлерова, д.17, ком.
              22
            </p>
          </div>
          <p className={c.infoBusiness}>
            ИНН 9728068473 <br /> ОГРН 1227700409507
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
