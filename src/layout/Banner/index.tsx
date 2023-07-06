import { Link } from "@/components/UI";
import c from "./styles.module.scss";
import { banner } from "@/assets/images";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className={c.section}>
      <div className="anchor" id="banner" />
      <div className={c.banner}>
        <div className={c.banner_content}>
          <p className={c.banner_title}>
            Акция <br />
            <span>до 31 июля 2023</span>
          </p>
          <p className={c.banner_descr}>
            При заказе любого сайта
            <br />
            <br />
            Заполните анкету и получите <br />
            оформление сообщества VK <strong>БЕСПЛАТНО</strong>
          </p>
          <Link href="#quiz" className={c.banner_button} type="fullfilled">
            Заполнить анкету
          </Link>
        </div>
        <img className={c.banner_image} src={banner} alt="Banner illustration" />
      </div>
    </section>
  );
};

export default Banner;
