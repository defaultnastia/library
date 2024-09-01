import css from "./Button.module.css";

const Button = ({ btnType, children, onClick }) => {
  const applyStyle = () => {
    switch (btnType) {
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

  return (
    <button className={applyStyle(btnType)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
