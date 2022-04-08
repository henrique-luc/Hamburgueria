import "./index.css";
import Button from "../Button";
import { useState } from "react";

const Header = ({ products, setFilteredProducts }) => {
  const [input, setInput] = useState("");

  function showProducts() {
    const filtrados = products.filter(
      (product) =>
        product.name.toLowerCase().includes(input.toLowerCase()) ||
        product.category.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filtrados);
  }

  return (
    <header className="container_header">
      <figure>
        <img src="BurguerKenzie.svg" alt="Logo Burguer Kenzie" />
        <figcaption>Logo Burguer Kenzie</figcaption>
      </figure>
      <section className="container_header-input">
        <input
          type="text"
          placeholder="Digitar pesquisa"
          onChange={(event) => setInput(event.target.value)}
        />
        <Button children={"Pesquisar"} onClick={() => showProducts()} />
      </section>
    </header>
  );
};

export default Header;
