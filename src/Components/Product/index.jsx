import "./index.css";
import Button from "../Button";

const Product = ({ cardProd }) => {
  return (
    <li>
      <figure>
        <img src={cardProd.img} alt={cardProd.name} />
        <figcaption>{cardProd.name}</figcaption>
      </figure>
      <h2>{cardProd.name}</h2>
      <small>{cardProd.category}</small>
      <span>{cardProd.price}</span>
      <Button children={"Adicionar"} />
    </li>
  );
};

export default Product;
