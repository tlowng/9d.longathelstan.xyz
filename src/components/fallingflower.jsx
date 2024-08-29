import React, { useEffect } from "react";

const FallingFlowers = () => {
  useEffect(() => {
    const pictureSrc = "https://1.bp.blogspot.com/-CXx9jt2JMRk/Vq-Lh5fm88I/AAAAAAAASwo/XivooDn_oSY/s1600/hoamai.png";
    const pictureWidth = 15;
    const pictureHeight = 15;
    const numFlakes = 10;
    const downSpeed = 0.001; // Smoother, slower fall
    const lrFlakes = 10;

    let xcoords = [];
    let ycoords = [];

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
            width: "15px",
            height: "15px",
            pointerEvents: "none",
          }}
        >
          <img
            src="https://1.bp.blogspot.com/-CXx9jt2JMRk/Vq-Lh5fm88I/AAAAAAAASwo/XivooDn_oSY/s1600/hoamai.png"
            width={15}
            height={15}
            alt="flower"
          />
        </div>
      ))}
    </>
  );
};

export default FallingFlowers;
