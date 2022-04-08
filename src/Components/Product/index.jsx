import "./card.css";
import "./cart.css";
import Button from "../Button";

const Product = ({ cardProd, handleClick, children }) => {
  return (
    <li
      className={
        children === "Adicionar" ? "container_card-li" : "container_cart-li"
      }
    >
      <section>
        <figure>
          <img src={cardProd.img} alt={cardProd.name} />
          <figcaption>{cardProd.name}</figcaption>
        </figure>
      </section>
      <section className="container_name">
        <h2>{cardProd.name}</h2>
        <small>{cardProd.category}</small>
        <span>R$ {cardProd.price.toFixed(2)}</span>
      </section>
      <section>
        <Button children={children} onClick={() => handleClick(cardProd.id)} />
      </section>
    </li>
  );
};

export default Product;
