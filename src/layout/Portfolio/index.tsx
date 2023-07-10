import c from "./styles.module.scss";
import "./swiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
} from "@/assets/images";
import { Button, Link } from "@/components/UI";
import clsx from "clsx";

type Props = {};

const slider = [
  {
    id: 1,
    href: "https://www.mashamati.com/",
    image: portfolio1,
    linkText: "Перейти на сайт",
    mobileLink: { color: "white" },
    title: "Веб-сайт для певицы",
    description: `Цель проекта: создать уникальное и вдохновляющее пространство, которое объединяет музыку и творчество Марии с ее преданными поклонниками. Этот сайт является эстетическим и функциональным хранилищем всего, что связано с Машей Мати
    `,
    list: [
      "Платформа: Webflow",
      "Стоимость: 25000 ₽",
      "Языки сайта: русский, английский",
    ],
  },
  {
    id: 2,
    href: "https://vk.com/weblab420",
    image: portfolio2,
    linkText: "Перейти в сообщество",
    mobileLink: {
      color: "#EE6F78",
    },
    title: "Оформление сообщества VK для веб-студии",
    description: `Цель проекта:  разработка и применение фирменного стиля веб-студии в оформлении сообщества VK. Это включает создание логотипа, цветовой палитры, типографики и других элементов, которые будут способствовать узнаваемости и установлению связи с брендом веб-студии.`,
    list: [
      "Платформа: VKontakte",
      "Стоимость: по запросу",
      "Язык проекта: русский",
    ],
  },
  {
    id: 3,
    href: "https://vk.com/project420ru",
    image: portfolio3,
    linkText: "Перейти в сообщество",
    mobileLink: { color: "white" },
    title: "Оформление сообщества VK для IT-компании",
    description: `Цель проекта:  создание привлекательной и профессиональной графической атмосферы, которая будет привлекать внимание пользователей, улучшать восприятие бренда компании и демонстрировать компетенции в сфере информационных технологий.`,
    list: [
      "Платформа: VKontakte",
      "Стоимость: по запросу",
      "Язык проекта: русский",
    ],
  },
  {
    id: 4,
    href: "",
    image: portfolio4,
    linkText: "Перейти на сайт",
    mobileLink: { color: "#FEE300" },
    title: "Оформление сообщества VK для сервиса по уборке",
    description: `Цель проекта: создание коллекции графических элементов, которые будут привлекать внимание пользователей и улучшат восприятие бренда Идеальная Чистота+ в социальной сети VKontakte
    `,
    list: [
      "Платформа: VKontakte",
      "Стоимость: 2000 ₽",
      "Язык проекта: русский",
    ],
  },
  {
    id: 5,
    href: "http://hlebmaslo.tilda.ws",
    image: portfolio5,
    linkText: "Перейти на сайт",
    mobileLink: { color: "#000000" },
    title: "Коллекция баннеров для пекарни-столовой",
    description: `Цель проекта: разработка эффективных и привлекательных графических элементов, которые будут использоваться для привлечения внимания посетителей и продвижения продукции пекарни-столовой.
    `,
    list: ["Платформа: Tilda", "Стоимость: 7000 ₽", "Язык проекта: русский"],
  },
  {
    id: 6,
    href: "http://www.moegnezdishko.ru/",
    image: portfolio6,
    linkText: "Перейти на сайт",
    mobileLink: { color: "#EC3C62" },
    title: "Веб-сайт для детского сада",
    description: `Цель проекта:  создание удобной и информативной платформы, которая будет служить центральным источником информации для родителей, привлечь новых клиентов и обеспечить эффективное взаимодействие между детским садом и его сообществом.`,
    list: ["Платформа: Webflow", "Стоимость: 15000 ₽", "Язык сайта: русский"],
  },
];

const Portfolio = (props: Props) => {
  const swiperProps = {
    slidesPerView: 1,
    loop: true,
    modules: [Pagination],
    pagination: {
      type: "bullets",
      clickable: true,
      el: ".swiper-pagination",
    },
  };

  return (
    <section className={c.section}>
      <div className="anchor" id="portfolio" />
      <div className={c.container}>
        <h2 className={c.title}>Портфолио</h2>
        {/* @ts-ignore */}
        <Swiper {...swiperProps}>
          {slider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={c.slide}>
                {slide.href && (
                  <a
                    style={{ color: slide.mobileLink.color }}
                    target="_blank"
                    href={slide.href}
                    className={c.slide_mobileLink}
                  >
                    {slide.linkText}
                  </a>
                )}
                <img
                  src={slide.image}
                  className={c.slide_image}
                  alt="Portfolio image"
                />
                <div className={c.slide_content}>
                  <h3 className={c.slide_title}>{slide.title}</h3>
                  <p className={c.slide_descr}>{slide.description}</p>
                  <ul className={c.slide_list}>
                    {slide.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                  {slide.href && (
                    <Link target="_blank" href={slide.href} type="outlined">
                      {slide.linkText}
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;
