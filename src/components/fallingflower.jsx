import React, { useEffect, useState } from "react";

const FallingFlowers = () => {
  const [flowerImage, setFlowerImage] = useState(null); // Sử dụng useState cho 1 ảnh

  useEffect(() => {
    const pictureSrcs = [
      "./flowers/hoadao.webp",
      "./flowers/hoamai.webp",
      "./flowers/bongtuyet.webp",
      "./flowers/bongtuyettrang.webp"
    ];

    const pictureWidth = 17;
    const pictureHeight = 17;
    const numFlakes = 10;
    const downSpeed = 0.001;
    const lrFlakes = 10;

    let xcoords = [];
    let ycoords = [];

    const randomIndex = Math.floor(Math.random() * pictureSrcs.length);
    setFlowerImage(pictureSrcs[randomIndex]);

    for (let x = 0; x < numFlakes; x++) {
      xcoords[x] = (x + 1) / (numFlakes + 1);
      let snFlkTemp;
      do {
        snFlkTemp = Math.round((numFlakes - 1) * Math.random());
      } while (typeof ycoords[snFlkTemp] === "number");
      ycoords[snFlkTemp] = x / numFlakes;
    }

    const flakeFall = () => {
      const scrWidth = window.innerWidth;
      const scrHeight = window.innerHeight;

      for (let x = 0; x < numFlakes; x++) {
        if (ycoords[x] * scrHeight > scrHeight - pictureHeight) {
          ycoords[x] = 0;
        }

        const divRef = document.getElementById("snFlkDiv" + x);
        if (!divRef) return;

        divRef.style.top = `${Math.round(ycoords[x] * scrHeight)}px`;
        divRef.style.left = `${Math.round(
          xcoords[x] * scrWidth - pictureWidth / 2 +
            (scrWidth / (numFlakes + 1) / 4) *
              (Math.sin(lrFlakes * ycoords[x]) - Math.sin(3 * lrFlakes * ycoords[x]))
        )}px`;

        ycoords[x] += downSpeed;
      }

      requestAnimationFrame(flakeFall);
    };

    flakeFall();
  }, []);

  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          id={`snFlkDiv${i}`}
          style={{
            position: "absolute",
            zIndex: 9999,
            width: "17px",
            height: "17px",
            pointerEvents: "none",
          }}
        >
          <img
            src={flowerImage}
            width={17}
            height={17}
            className="fallingFlower"
            alt="flower"
          />
        </div>
      ))}
    </>
  );
};

export default FallingFlowers;