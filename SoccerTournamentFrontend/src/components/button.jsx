import React from "react";
import "./button.css";

const STYLES = ["btn-primary", "btn-utline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonstyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonstyle)
    ? buttonstyle
    : STYLES[0];

  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
