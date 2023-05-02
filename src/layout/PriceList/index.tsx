import {
  instagramColor,
  priceList1Dark,
  priceList1Light,
  priceList2Dark,
  priceList2Light,
  vkColor,
} from "@/assets/images";
import c from "./styles.module.scss";
import { Button, Link } from "@/components/UI";
import { useContext } from "react";
import themeContext from "@/theme";
type Props = {};

const PriceList = (props: Props) => {
  const { theme } = useContext(themeContext);

  return (
    <section className={c.section} id="priceList">
      <div className={c.container}>
        <h2 className={c.title}>Прайс-лист</h2>

        <div className={c.priceList}>
          <div className={c.siteBox}>
            <div className={c.image}>
              <img
                src={theme == "dark" ? priceList1Dark : priceList1Light}
                alt="Creataing site image"
              />
            </div>
            <div className={c.content}>
              <h3 className={c.contentTitle}>Сайт</h3>
              <ul className={c.contentList}>
                <li>Уникальный дизайн сайта</li>
                <li>Тестирование сайта</li>
                <li>
                  Гарантийное обслуживание{" "}
                  <span className={c.focus}>год Бесплатно</span>
                </li>
                <li>Наполнение продающим контентом</li>
                <li>Размещение сайта на хостинг</li>
                <li>Помощь в приобретении домена</li>
              </ul>
              <p className={c.price}>От 5.000₽</p>
              <Link href="#bitrixForm" className={c.button} type="fullfilled">
                Заказать сайт
              </Link>
            </div>
          </div>
          <div className={c.socialsBox}>
            <div className={c.boxColumnWrapper}>
              <div className={c.contentStart}>
                <div className={c.socialImage}>
                  <img src={instagramColor} alt="Instagram" />
                </div>
                <ul className={c.contentList}>
                  <li>Регистрация аккаунта инстаграм</li>
                  <li>Создание аватарки инстаграм</li>
                  <li>Создание обложек хайлайтс 4 шт.</li>
                  <li>Создание сториз инстаграм 4 шт.</li>
                  <li>Оформление шапки инстаграм</li>
                </ul>
              </div>
              <div className={c.contentEnd}>
                <div className={c.socialImage}>
                  <img src={vkColor} alt="VK" />
                </div>
                <ul className={c.contentList}>
                  <li>Создание группы Вк</li>
                  <li>Заполнение информации о компании </li>
                  <li>Создание шаблона поста </li>
                  <li>Создание группы </li>
                  <li>Добавление администраторов в группу </li>
                </ul>
              </div>
            </div>
            <p className={c.price}>От 2.000₽</p>
            <Link href="#bitrixForm" className={c.button} type="fullfilled">
              Заказать оформление{" "}
            </Link>
          </div>
          <div className={c.bitrixBox}>
            <div className={c.content}>
              <h3 className={c.contentTitle}>Битрикс 24</h3>
              <ul className={c.contentList}>
                <li>Создание портала</li>
                <li>Индивидуализация портала (ссылка, логотип, название)</li>
                <li>Настройка поступления заявок с сайта </li>
                <li>Установка виджета на сайт</li>
                <li>Интеграция с Телеграм, ВК</li>
                <li>Создание пользовательских полей в карточке сделки</li>
                <li>Разработка посадочной страницы в Битрикс</li>
                <li>Проведение обучения</li>
              </ul>
              <p className={c.price}>От 10.000₽</p>
              <Link href="#bitrixForm" className={c.button} type="fullfilled">
                Оформить Битрикс
              </Link>
            </div>
            <div className={c.image}>
              <img
                src={theme == "dark" ? priceList2Dark : priceList2Light}
                alt="Creataing bitrix"
              />
            </div>
          </div>
          <div className={c.yandexBox}>
            <h3 className={c.contentTitle}>Яндекс реклама</h3>
            <ul className={c.contentList}>
              <li>Сбор семантического ядра</li>
              <li>Создание продающих объявлений</li>
              <li>Создание двух рекламных кампаний (Поиск и РСЯ)</li>
              <li>
                Настройка автоматического отслеживания и выставления ставок
              </li>
            </ul>
            <p className={c.price}>От 8.000₽</p>
            <Link href="#bitrixForm" className={c.button} type="fullfilled">
              Заказать рекламу
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
