import "./index.css";

const Button = ({ onClick, children }) => {
  return (
    <>
      <button className={children} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
