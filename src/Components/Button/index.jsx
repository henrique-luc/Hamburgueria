import "./index.css";

const Button = ({ onClick, children }) => {
  return (
    <>
      <button className="button_geral" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
