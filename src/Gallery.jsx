import { useState, useEffect, useRef } from "react";
import mediaData from "./data";

function Gallery() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % mediaData.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? mediaData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (mediaData[index].type === "image") {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [index]);

  const handleVideoEnd = () => {
    nextSlide();
  };

  return (
    <div className="gallery">
      <button className="left" onClick={prevSlide}>❮</button>

      <div className="media-container">
        {mediaData[index].type === "image" ? (
          <img src={mediaData[index].src} alt="slide" />
        ) : (
          <video
            ref={videoRef}
            src={mediaData[index].src}
            autoPlay
            controls
            onEnded={handleVideoEnd}
          />
        )}
      </div>

      <button className="right" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Gallery;