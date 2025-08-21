import { useState } from "react";
import "./ProductGallery.css";
import Lightbox from "../Lightbox/Lightbox";
import { productImages } from "../../App";

function ProductGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToPreviousImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openLightbox = () => {
    if (window.innerWidth >= 900) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <section className="gallery-container">
        <div className="main-image" onClick={openLightbox}>
          <img src={productImages[activeImageIndex].main} alt="Product" />

          <div className="mobile-nav-btns">
            <button className="mobile-nav-btn" onClick={goToPreviousImage}>
              <img src="/images/icon-previous.svg" alt="Previous" />
            </button>
            <button className="mobile-nav-btn" onClick={goToNextImage}>
              <img src="/images/icon-next.svg" alt="Next" />
            </button>
          </div>
        </div>

        <div className="thumbnail-gallery">
          {productImages.map((image, index) => (
            <div
              key={image.id}
              className={`thumbnail ${
                activeImageIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={image.thumb} alt={`Thumbnail ${image.id}`} />
            </div>
          ))}
        </div>
      </section>

      {isLightboxOpen && (
        <Lightbox
          initialImageIndex={activeImageIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
}

export default ProductGallery;
