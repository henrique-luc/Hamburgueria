import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductsList";
import Cart from "./Components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );

      const jsonResponse = await response.json();

      setFilteredProducts(jsonResponse);
      setProducts(jsonResponse);
    };

    fetchResponse();
  }, []);

  function handleClick(productId) {
    const filtered = products.find((product) => product.id === productId);
    setCurrentSale([...currentSale, filtered]);
  }

  function handleClickRemove(productId) {
    const filtered = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(filtered);
  }

  function handleClickRemoveAll() {
    setCurrentSale([]);
  }

  return (
    <div className="App">
      <Header setFilteredProducts={setFilteredProducts} products={products} />
      <main>
        <ProductList
          filteredProducts={filteredProducts}
          handleClick={handleClick}
          children={"Adicionar"}
        />
        <Cart
          currentSale={currentSale}
          handleClick={handleClickRemove}
          children={"Remover"}
        />
      </main>
    </div>
  );
}

export default App;
