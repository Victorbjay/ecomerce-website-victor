import "./Cart.css";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-popup">
      <h3 className="cart-title">Cart</h3>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p className="cart-empty-message">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="cart-item-thumbnail"
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">
                      ${item.price.toFixed(2)} x {item.quantity}
                      <span className="cart-item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cart-item-delete-btn"
                  >
                    <img src="/images/icon-delete.svg" alt="Remove item" />
                  </button>
                </li>
              ))}
            </ul>
            <button className="checkout-btn">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
