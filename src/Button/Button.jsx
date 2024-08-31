import css from "./Button.module.css";

const Button = ({ type, children }) => {
  const applyStyle = () => {
    switch (type) {
      case "normal":
        return css.normal;
      case "red":
        return css.red;
      case "submit":
        return css.submit;
      default:
        return css.normal;
    }
  };

  return <button className={applyStyle(type)}>{children}</button>;
};

export default Button;
