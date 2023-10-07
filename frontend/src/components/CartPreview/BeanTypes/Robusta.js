import React, { useRef, useEffect } from "react";
import anime from "animejs";
import RobustaBean from "../../../assets/Order/robustaProduct.png";

const RobustaPreview = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    anime({
      targets: imgRef.current,
      translateX: [
        {
          value: 250, 
          duration: 0, 
        },
        {
          value: 0, 
          duration: 800,
        },
      ],
      rotate: {
        value: -630,
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
        Robusta Coffee Bean
      </p>
      <img
        ref={imgRef}
        src={RobustaBean}
        alt="Robusta Bean"
        className="bg-transparent w-14 h-20 rotate-90 drop-shadow-2xl ml-20 opacity-95"
        style={shadowClass}
      />
    </div>
  );
};

export default RobustaPreview;
