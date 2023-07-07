import { Link } from "@/components/UI";
import c from "./styles.module.scss";
import {
  dark__service1,
  dark__service2,
  dark__service3,
  dark__service4,
  light__service1,
  light__service2,
  light__service3,
  light__service4,
} from "@/assets/images";
import { useContext } from "react";
import themeContext from "@/theme";

type Props = {};

function createService(service: any) {
  return (
    <div className={c.service} key={service.title}>
      <div className={c.serviceContent}>
        <h3 className={c.serviceTitle}>{service.title}</h3>
        {service.content}
        <Link
          className={c.serviceButton}
          type="outlined"
          href={service.button.href}
        >
          {service.button.text}
        </Link>
      </div>
      <figure className={c.serviceImage}>
        <img src={service.image} alt="Service image" />
      </figure>
    </div>
  );
}

const AboutOurService = (props: Props) => {
  const { theme } = useContext(themeContext);

  const services = [
    {
      title: "Сайт для генерации заявок",
      content: (
        <>
          <p className={c.serviceText}>
            Вы получите сайт, который отлично продает определенный товар или
            услугу. Мы запустим ваш проект быстро и с комфортом для вас.
            Спокойно занимайтесь бизнесом, а мы займемся сайтом.
          </p>
          <ul className={c.serviceList}>
            <li className={c.serviceListItem}>
              Пришлите информацию - мы заполним сайт за вас
            </li>
            <li className={c.serviceListItem}>
              Вы получите в подарок домен в зоне RU, РФ и др.
            </li>
            <li className={c.serviceListItem}>
              Простой редактор сайтов позволяет вносить изменения на сайте без
              привлечения специалиста
            </li>
          </ul>
        </>
      ),
      button: { text: "Заказать сайт", href: "#bitrixForm" },
      image: theme == "dark" ? dark__service1 : light__service1,
    },
    {
      title: "Регистрация в поисковых системах",
      content: (
        <>
          <p className={c.serviceText}>
            Зарегистрируем ваш сайт в системе Яндекс и Google - первый шаг к
            привлечению клиентов в Интернете.
          </p>
          <ul className={c.serviceList}>
            <li className={c.serviceListItem}>
              Определим ключевые слова и фразы
            </li>
            <li className={c.serviceListItem}>
              Включим ключевые слова в заголовки страниц
            </li>
            <li className={c.serviceListItem}>
              Подключим Яндекс.Метрику для анализа трафика
            </li>
          </ul>
        </>
      ),
      button: { text: "Заказать сайт", href: "#bitrixForm" },
      image: theme == "dark" ? dark__service2 : light__service2,
    },
    {
      title: "Подключение Битрикс24",
      content: (
        <>
          <div
            className="anchor"
            id="bitrix24"
            style={{ top: "calc(var(--header-height) * -1.5)" }}
          />
          <p className={c.serviceText}>
            Битрикс24 - инструмент для автоматизации продаж и маркетинга. Ведите
            всю клиентскую базу в одном месте, подключив все каналы продаж:
            телефон, сайт, почту, социальные сети и мессенджеры.
          </p>
          <ul className={c.serviceList}>
            <li className={c.serviceListItem}>Совместная работа</li>
            <li className={c.serviceListItem}>Задачи и проекты</li>
            <li className={c.serviceListItem}>
              Все каналы продаж в одном месте
            </li>
          </ul>
        </>
      ),
      button: { text: "Заказать сайт", href: "#bitrixForm" },
      image: theme == "dark" ? dark__service3 : light__service3,
    },
    {
      title: "Техническая поддержка 7 дней в неделю",
      content: (
        <>
          <p className={c.serviceText}>
            Вы можете обратиться к нам по телефону, почте или в мессенджерах -
            мы готовы помочь вам 7 дней в неделю.
          </p>
          <ul className={c.serviceList}>
            <li className={c.serviceListItem}>
              Ни одно ваше обращение не останется без ответа
            </li>
            <li className={c.serviceListItem}>
              Если вы нам не дозвонились - мы вам перезвоним
            </li>
            <li className={c.serviceListItem}>
              Мы бесплатно делимся советами по работе с сайтом
            </li>
          </ul>
        </>
      ),
      button: { text: "Заказать сайт", href: "#bitrixForm" },
      image: theme == "dark" ? dark__service4 : light__service4,
    },
  ];

  return (
    <section className={c.section}>
      <div className="anchor" id="aboutOurService" />
      <div className={c.container}>
        <h2 className={c.title}>Что входит в стоимость</h2>
        <div className={c.services}>{services.map(createService)}</div>
      </div>
    </section>
  );
};

export default AboutOurService;
