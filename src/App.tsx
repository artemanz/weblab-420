import { useEffect, useState } from "react";
import {
  AboutOurService,
  BitrixForm,
  Cases,
  Chat,
  Complex,
  Footer,
  Header,
  Hero,
  HowWeWork,
  Map,
  PriceList,
} from "./layout";
import ThemeContext from "./theme";

import { isMobile } from "react-device-detect";
import { Loader } from "./components";
import { AnimatePresence } from "framer-motion";

const detectDesktopMode =
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
    navigator.userAgent
  );

function App() {
  const initialTheme = JSON.parse(localStorage.getItem("theme")!) || "dark";
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile && detectDesktopMode) {
      const metaTag = document.head.querySelector("meta[name=viewport]");
      // @ts-ignore
      metaTag.content = "width=1920";
    }
    // document.location.search = 'lookAtMeNow=1';

    window.setTimeout(() => setLoaded(true), 2000);
  }, []);

  useEffect(() => {
    if (theme == "light") document.body.dataset.theme = "light";
    if (theme == "dark") document.body.dataset.theme = "dark";
    window.localStorage.setItem("theme", JSON.stringify(theme));

    removePreloadClass();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
      <Header />
      <main>
        <Hero setLoaded={setLoaded} />
        <AboutOurService />
        <Complex />
        <HowWeWork />
        <Chat />
        <PriceList />
        <Cases />
        <BitrixForm />
        <Map />
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

function removePreloadClass() {
  if (document.body.classList.contains("preload")) {
    setTimeout(() => document.body.classList.remove("preload"));
  }
}
