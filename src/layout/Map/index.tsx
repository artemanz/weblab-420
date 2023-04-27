type Props = {};
import c from "./styles.module.scss";

const Map = (props: Props) => {
  return (
    <div id="map">
      <iframe
        className={c.mobileMap}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0210bceb3308957d424eafe82aa465aac2606bbceacba5225073d956af5a00f2&amp;source=constructor"
        width="100%"
        height="411"
        frameBorder="0"
      ></iframe>

      <iframe
        className={c.desktopMap}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0210bceb3308957d424eafe82aa465aac2606bbceacba5225073d956af5a00f2&amp;source=constructor"
        width="100%"
        height="420"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Map;
