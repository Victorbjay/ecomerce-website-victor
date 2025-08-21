import { useState } from "react";
import "./Header.css";
import { useCart } from "../../context/CartContext";
import Cart from "../Cart/Cart";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="header">
        <div className="header-left">
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsNavOpen(true)}
          >
            <img src="/images/icon-menu.svg" alt="Open menu" />
          </button>
          <a href="#" className="logo">
            <img src="/images/logo.svg" alt="Sneakers logo" />
          </a>
          <nav className="main-nav desktop-nav">
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <button
            className="cart-btn"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <img src="/images/icon-cart.svg" alt="Cart" />
          </button>
          <a href="#" className="avatar">
            <img src="/images/image-avatar.png" alt="User avatar" />
          </a>
        </div>
        {isCartOpen && <Cart />}
      </header>

      <div
        className={`mobile-nav-overlay ${isNavOpen ? "active" : ""}`}
        onClick={() => setIsNavOpen(false)}
      ></div>
      <nav className={`main-nav mobile-nav ${isNavOpen ? "active" : ""}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setIsNavOpen(false)}
        >
          <img src="/images/icon-close.svg" alt="Close menu" />
        </button>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
