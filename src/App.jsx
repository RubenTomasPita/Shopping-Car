import React, { useState } from 'react';
import Laptop1 from './images/laptop1.jpg';
import Notebook from './images/Notebook-9-Pro-3.jpg';
import Dell from './images/laptop1.jpg';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartMenu({ itemCount, toggleCart, isCartOpen, cart, total, removeFromCart }) {
  return (
    <div className="cart-menu">
      <div className="cart-menu-icon" onClick={toggleCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-item-count">{itemCount}</span>
      </div>
      {isCartOpen && (
        <div className="cart-dropdown">
          <CartContent cart={cart} total={total} removeFromCart={removeFromCart} />
        </div>
      )}
    </div>
  );
}

function CartContent({ cart, total, removeFromCart }) {
  return (
    <div className="cart-content-inner">
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">${item.price}</span>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button onClick={removeFromCart} className="remove-from-cart-button">
          Quitar un producto
        </button>
      )}
      <p>Total: ${total}</p>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = () => {
    if (cart.length > 0) {
      const lastItem = cart[cart.length - 1];
      const updatedCart = cart.slice(0, cart.length - 1);
      setCart(updatedCart);
      setTotalPrice(totalPrice - lastItem.price);
    }
  };

  const products = [
    { id: 1, name: 'Laptop Dell normal', price: 4000, image: Laptop1 },
    { id: 2, name: 'NoteBook Pro', price: 5000, image: Notebook },
    { id: 3, name: 'Laptop Dell Pro', price: 8000, image: Dell },
  ];

  return (
    <div>
      <h1 className='titulo'>Carrito de Compras</h1>
      <div className="cart-menu">
        <CartMenu itemCount={cart.length} toggleCart={toggleCart} isCartOpen={isCartOpen} cart={cart} total={totalPrice} removeFromCart={removeFromCart} />
      </div>
      <div className="container">
        <h2 className="product-list-title">Lista de Productos</h2>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item" data-product={product.name}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price}</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-button">
                  Agregar al carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
