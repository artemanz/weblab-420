import { Link } from "@/components/UI";
import c from "./styles.module.scss";
import {
  service1Dark,
  service1Light,
  service2Dark,
  service2Light,
  service3Dark,
  service3Light,
  service4Dark,
  service4Light,
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
      title: "Сайт для генерации заявок от клиентов",
      content: (
        <>
          <p className={c.serviceText}>
            Сайт может быть настроен для различных целей: продажа товаров и
            услуг, регистрация на мероприятия, подписка на новостную рассылку,
            заполнение формы обратной связи и т.д.
          </p>
          <ul className={c.serviceList}>
            <li className={c.serviceListItem}>
              Адаптация под все утройства и браузеры
            </li>
            <li className={c.serviceListItem}>Продающий контент</li>
            <li className={c.serviceListItem}>Интеграция с Bitrix24 </li>
          </ul>
        </>
      ),
      button: { text: "Заказать сайт", href: "#bitrixForm" },
      image: theme == "dark" ? service1Dark : service1Light,
    },
    {
      title: "Оформленные профили социальных сетей",
      content: (
        <>
          <p className={c.serviceText}>
            Социальные сети оформляются специалистами в области дизайна и
            маркетинга с учетом целей и задач вашего бизнеса. Качественный и
            оригинальный контент способствует продвижению компании в сети.
          </p>
          <ul className={c.serviceList}>
            <li className={c.serviceListItem}>Оформление группы ВК</li>
            <li className={c.serviceListItem}>
              Создание обложек товаров и услуг
            </li>
            <li className={c.serviceListItem}>Дизайн постов</li>
          </ul>
        </>
      ),
      button: { text: "Заказать оформление", href: "#bitrixForm" },
      image: theme == "dark" ? service2Dark : service2Light,
    },
    {
      title: "Готовая система продаж",
      content: (
        <>
          <p className={c.serviceText}>
            CRM-система — инструмент для автоматизации продаж и маркетинга.
            Ведите всю клиентскую базу в одном месте, подключив все каналы
            продаж: телефон, сайт, почту, соцсети и мессенджеры.
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
      button: { text: "Оформить CRM", href: "#bitrixForm" },
      image: theme == "dark" ? service3Dark : service3Light,
    },
    {
      title: "Реклама и продвижение",
      content: (
        <>
          <p className={c.serviceText}>
            Ваши товары или услуги нужны сотням, а то и тысячам людей. Позвольте
            нам донести ваше предложение до них. Используйте наш десятилетний
            опыт настройки Я.Директ на пользу вашему бизнесу!
          </p>
          <ul className={c.serviceList}>
            <li className={c.serviceListItem}>
              Тексты убедительных объявлений
            </li>
            <li className={c.serviceListItem}>Отчеты в реальном времени</li>
            <li className={c.serviceListItem}>Расчет бюджета за 15 минут</li>
          </ul>
        </>
      ),
      button: { text: "Заказать рекламу", href: "#bitrixForm" },
      image: theme == "dark" ? service4Dark : service4Light,
    },
  ];

  return (
    <section className={c.section} id="aboutOurService">
      <div className={c.container}>
        <h2 className={c.title}>Что вы получите</h2>
        <div className={c.services}>{services.map(createService)}</div>
      </div>
    </section>
  );
};

export default AboutOurService;
