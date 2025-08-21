import { useState } from "react";
import "./ProductDetails.css";
import { useCart } from "../../context/CartContext";
import { productImages } from "../../App";

function ProductDetails() {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const productData = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    thumbnail: productImages[0].thumb,
  };

  const handleIncreaseQuantity = () => setQuantity((q) => q + 1);
  const handleDecreaseQuantity = () => setQuantity((q) => (q > 0 ? q - 1 : 0));
  const handleAddToCart = () => addToCart(productData, quantity);

  return (
    <section className="details-container">
      <span className="product-company">Sneaker Company</span>
      <h1 className="product-title">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-section">
        <div className="current-price">
          <span className="price">$125.00</span>
          <span className="discount">50%</span>
        </div>
        <span className="original-price">$250.00</span>
      </div>
      <div className="actions-section">
        <div className="quantity-selector">
          <button className="quantity-btn" onClick={handleDecreaseQuantity}>
            <img src="/images/icon-minus.svg" alt="Decrease quantity" />
          </button>
          <span className="quantity-count">{quantity}</span>
          <button className="quantity-btn" onClick={handleIncreaseQuantity}>
            <img src="/images/icon-plus.svg" alt="Increase quantity" />
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <img src="/images/icon-cart.svg" alt="" className="cart-icon-btn" />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
