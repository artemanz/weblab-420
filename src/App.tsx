import { useEffect, useState } from "react";
import {
  AboutOurService,
  BitrixForm,
  Chat,
  Banner,
  Footer,
  Header,
  Hero,
  HowWeWork,
  Map,
  PriceList,
  Quiz,
  Portfolio,
  Reviews,
} from "./layout";
import ThemeContext from "./theme";

import { isMobile } from "react-device-detect";
import { Loader } from "./components";

import c from "./app.module.scss";
import { ie } from "./assets/images";
import { ArrowUp } from "./components/UI";

const detectDesktopMode =
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
    navigator.userAgent
  );

function App() {
  const initialTheme = JSON.parse(localStorage.getItem("theme")!) || "dark";
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme);

  const isIE = navigator.userAgent.indexOf("Trident/") > -1;

  if (isIE)
    return (
      <div className={c.ie}>
        <div className={c.bg} style={{ backgroundImage: `url(${ie})` }} />
        <h2 className={c.title}>Горячо</h2>
        <p className={c.subtitle}>
          Вы уже близко.
          <br />
          Попробуйте открыть наш
          <br />
          сайт в другом браузере.
        </p>
      </div>
    );

  useEffect(() => {
    if (isMobile && detectDesktopMode) {
      const metaTag = document.head.querySelector("meta[name=viewport]");
      // @ts-ignore
      metaTag.content = "width=1920";
    }
  }, []);

  useEffect(() => {
    if (theme == "light") document.body.dataset.theme = "light";
    if (theme == "dark") document.body.dataset.theme = "dark";
    window.localStorage.setItem("theme", JSON.stringify(theme));

    removePreloadClass();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Header />
      <main>
        <Hero />
        <PriceList />
        <AboutOurService />
        <Banner />
        <HowWeWork />
        <Quiz />
        <Portfolio />
        <Chat />
        <Reviews />
        <BitrixForm />
        <Map />
        <Footer />
      </main>
      <ArrowUp />
    </ThemeContext.Provider>
  );
}

export default App;

function removePreloadClass() {
  if (document.body.classList.contains("preload")) {
    setTimeout(() => document.body.classList.remove("preload"));
  }
}
