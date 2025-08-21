import "./index.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductDetails from "./components/ProductDetails/ProductDetails";

export const productImages = [
  {
    id: 1,
    main: "/images/image-product-1.jpg",
    thumb: "/images/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    main: "/images/image-product-2.jpg",
    thumb: "/images/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    main: "/images/image-product-3.jpg",
    thumb: "/images/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    main: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
  },
];

function App() {
  return (
    <CartProvider>
      <Header />
      <main className="main-content-wrapper">
        <ProductGallery />
        <ProductDetails />
      </main>
    </CartProvider>
  );
}

export default App;
