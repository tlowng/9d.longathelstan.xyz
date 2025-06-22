import { useState } from "react";
import { timelineImages } from "../data/bannerData";
import { motion } from "framer-motion";
import "./timeline.css";

const TimelinePopup = ({ show, onClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  if (!show) return null;

  return (
    <>
      <div className="popup-overlay">
        <div className="timeline-popup">
          <div className="timeline-header">
            <h2>D K21-25 NB's yearbook</h2>
            <button className="timeline-close" onClick={onClose}>✕</button>
          </div>

          <div className="timeline-content">
            {Object.entries(timelineImages).map(([month, images], index) => (
              <motion.div
                key={month}
                className="timeline-month-block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="timeline-month">{month}</div>
                {images.length > 0 ? (
                  <div className="timeline-gallery">
                    {images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Ảnh ${i}`}
                        onClick={() => setSelectedImg(img)}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="timeline-empty">Chưa có ảnh</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedImg && (
        <div className="popup-overlay" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Xem ảnh" className="popup-image" />
        </div>
      )}
    </>
  );
};

export default TimelinePopup;
