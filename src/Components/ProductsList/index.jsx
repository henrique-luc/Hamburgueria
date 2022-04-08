import "./index.css";
import Product from "../Product";

const ProductList = ({ filteredProducts, handleClick, children }) => {
  return (
    <ul className="container_card-produtos">
      {filteredProducts.map((cardProd, index) => (
        <Product
          cardProd={cardProd}
          key={index}
          handleClick={handleClick}
          children={children}
        />
      ))}
    </ul>
  );
};

export default ProductList;
