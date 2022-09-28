import React from "react";
import style from "./button.module.css";

function Button({ children }) {
  return <button type="button">{children}</button>;
}

export default Button;
