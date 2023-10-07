import React, { useRef, useEffect } from "react";
import anime from "animejs";
import LibericaBean from "../../../assets/Order/libericaProduct.png";

const LibericaPreview = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    anime({
      targets: imgRef.current,
      translateX: [
        {
          value: -250, // Start from -250px
          duration: 0, // No animation for starting position
        },
        {
          value: 0, // End at 0px (center)
          duration: 800,
        },
      ],
      rotate: {
        value: 450,
        duration: 1800,
        easing: "easeInOutSine",
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: "easeInOutQuart",
      },
      delay: 250,
    });
  }, []);

  const shadowClass = {
    filter: "drop-shadow(0 8px 1rem rgb(60, 42, 33))",
  };

  return (
    <div className="bg-transparent mb-28 flex-col justify-center">
      <p className="text-2xl mb-24 font-bold bg-transparent opacity-85">
        Liberica Coffee Bean
      </p>
      <img
        ref={imgRef}
        src={LibericaBean}
        alt="Liberica Bean"
        className="bg-transparent w-14 h-20 rotate-90 drop-shadow-2xl ml-20 opacity-95"
        style={shadowClass}
      />
    </div>
  );
};

export default LibericaPreview;
