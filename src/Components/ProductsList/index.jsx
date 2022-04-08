import "./index.css";
import Product from "../Product";

const ProductList = ({ products }) => {
  <ul>
    {products.map((cardProd, index) => (
      <Product cardProd={cardProd} key={index} />
    ))}
  </ul>;
};

export default ProductList;
