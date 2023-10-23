// Define el componente "CartContent"
function CartContent({ cart, total, removeFromCart }) {
  return (
    <div className="cart-content-inner">
      <h3>Tu carrito de compras</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span className="cart-item-name">{item.name} - ${item.price}</span>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div>
          <button onClick={removeFromCart} className="remove-from-cart-button">
            Quitar un producto
          </button>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
}
