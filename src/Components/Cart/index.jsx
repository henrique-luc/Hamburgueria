import "./index.css";
import ProductList from "../ProductsList";

const Cart = ({ currentSale, handleClick, children, handleClickRemoveAll }) => {
  const totalValue = () => {
    return currentSale.reduce(
      (acumulador, currentValue) => acumulador + Number(currentValue.price),
      0
    );
  };

  return (
    <aside className="container_cart">
      <section className="container_cart-tittle">
        <h2>Carrinho de compras</h2>
      </section>
      {currentSale.length < 1 ? (
        <section className="container_cart-vazio">
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </section>
      ) : (
        <div className="container_cart-cheio">
          <section className="">
            <ProductList
              filteredProducts={currentSale}
              handleClick={handleClick}
              children={children}
            />
          </section>
          <section className="">
            <div className="container_cart-cheio-total">
              <h3>Total</h3>
              <span>R$ {totalValue()}</span>
            </div>
            <button onClick={() => handleClickRemoveAll()}>
              Remover todos
            </button>
          </section>
        </div>
      )}
    </aside>
  );
};

export default Cart;
