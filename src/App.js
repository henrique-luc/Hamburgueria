import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );

      const jsonResponse = await response.json();

      setProducts(jsonResponse);
    };

    fetchResponse();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
