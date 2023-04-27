import {
  ChangeEvent,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import c from "./styles.module.scss";
import { DarkSwitch, LightSwitch } from "./icons";
import clsx from "clsx";
import themeContext from "@/theme";

interface Props extends HTMLAttributes<HTMLElement> {}

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useContext(themeContext);

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked ? "light" : "dark");
  }

  return (
    <label {...props} className={clsx(c.themeSwitcher, props.className)}>
      <input
        checked={theme == "light"}
        onChange={onChangeHandler}
        type="checkbox"
      />
      <div className={c.ico}>
        {theme == "dark" ? <DarkSwitch /> : <LightSwitch />}
      </div>
    </label>
  );
};

export default ThemeSwitcher;
