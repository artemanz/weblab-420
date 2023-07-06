import c from "./styles.module.scss";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section className={c.section}>
      <div className="anchor" id="reviews" />
      <div className={c.container}>
        <h2 className={c.title}>Отзывы</h2>
        <div className={c.reviews}>
          <div className={c.iframeContainer}>
            <iframe
              className={c.iframe}
              src="https://yandex.ru/maps-reviews-widget/48724898276?comments"
            ></iframe>
            <a
              className={c.reviewsLink}
              href="https://yandex.ru/maps/org/weblab_420/48724898276/"
              target="_blank"
            >
              Weblab 420 на карте Москвы — Яндекс Карты
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
