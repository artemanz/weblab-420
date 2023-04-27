import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import c from "./styles.module.scss";
import clsx from "clsx";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: "fullfilled" | "outlined";
}

const Button = ({ type = "outlined", children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(c.button, props.className)}
      data-type={type}
    >
      {children}
    </button>
  );
};

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: "fullfilled" | "outlined";
}
const Link = ({ type = "outlined", children, ...props }: LinkProps) => {
  return (
    <a {...props} className={clsx(c.button, props.className)} data-type={type}>
      {children}
    </a>
  );
};

export { Button, Link };
