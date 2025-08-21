import { useState } from "react";
import "./Lightbox.css";
import { productImages } from "../../App";

function Lightbox({
  onClose,
  initialImageIndex,
}: {
  onClose: () => void;
  initialImageIndex: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex =
      currentIndex === 0 ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex =
      currentIndex === productImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose}>
          <img src="/images/icon-close.svg" alt="Close" />
        </button>
        <div className="lightbox-main-image">
          <button className="lightbox-nav-btn prev" onClick={goToPrevious}>
            <img src="/images/icon-previous.svg" alt="Previous" />
          </button>
          <img src={productImages[currentIndex].main} alt="Product" />
          <button className="lightbox-nav-btn next" onClick={goToNext}>
            <img src="/images/icon-next.svg" alt="Next" />
          </button>
        </div>
        <div className="lightbox-thumbnail-gallery">
          {productImages.map((image, index) => (
            <div
              key={image.id}
              className={`lightbox-thumbnail ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image.thumb} alt={`Thumbnail ${image.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
