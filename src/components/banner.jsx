import { useEffect, useRef, useState } from "react";
import { timelineImages } from "../data/bannerData";
import TimelinePopup from "./TimelinePopup"; // 👈 Import
import "./banner.css";

const images = Object.values(timelineImages).flat();

const BannerInteraction = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const containerRef = useRef();
  const intervalRef = useRef();

  const slideWidth = () => containerRef.current?.offsetWidth || 0;

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: slideWidth() * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setPopupOpen(false);
  };

  useEffect(() => {
    if (popupOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popupOpen]);

  return (
    <>
      <div className="banner-wrapper">
        <div
          ref={containerRef}
          className="banner-slider-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="banner-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="banner-slide"
                onClick={() => setPopupOpen(true)}
              >
                <img src={img} alt={`Slide ${i}`} className="banner-preview" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <TimelinePopup show={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default BannerInteraction;
