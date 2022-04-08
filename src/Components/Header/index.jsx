import "./index.css";
import Button from "../Button";

const Header = () => {
  return (
    <header className="container_header">
      <figure>
        <img src="BurguerKenzie.svg" alt="Logo Burguer Kenzie" />
        <figcaption>Logo Burguer Kenzie</figcaption>
      </figure>
      <section>
        <input type="text" />
        <Button children={"Pesquisar"} />
      </section>
    </header>
  );
};

export default Header;
