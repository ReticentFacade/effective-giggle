import React, { useRef, useEffect } from "react";
import anime from "animejs";
import DeliveryTruck from "../../../assets/Order/deliveryTruck.png";
import MapSVG from "./Map.js";

const DeliveryTruckPreview = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // // Create an animation timeline
    // const timeline = anime.timeline({
    //   autoplay: true,
    //   //   loop: true,
    // });

    // // Animation to move the truck from left to right
    // timeline.add({
    //   targets: imgRef.current,
    //   translateX: [-275, 275],
    //   duration: 1000,
    //   easing: "linear",
    // });

    // // Animation to shift the truck up and fall on the x-axis right
    // timeline.add({
    //   targets: imgRef.current,
    //   //   translateY: ["0px", "-40px", "0px"], // Shift up & down
    //   translateY: [
    //     { value: "0px", duration: 250, easing: "linear" }, // Start from 0px
    //     { value: "-40px", duration: 250, easing: "linear" }, // Gradually shift up
    //     { value: "0px", duration: 500, easing: "easeOutQuad" }, // Fall down smoothly
    //   ],
    //   translateX: "275px", // Move right while falling
    //   duration: 1000,
    //   easing: "easeOutQuad", // Easing for a smooth stop
    // });

    // -----------------------------

    anime({
      targets: imgRef.current,
      translateX: ["-245px", "30px"],
      easing: "easeInOutExpo",
      duration: 2000,
    });
  }, []);

  return (
    <div className="bg-transparent mb-20 flex flex-col items-center">
      <p className="text-2xl font-bold bg-transparent opacity-85">
        Where should we deliver?
      </p>
      <div className="flex bg-transparent justify-between">
        <div className="bg-transparent flex items-center ml-32">
          <img
            ref={imgRef}
            src={DeliveryTruck}
            alt="Delivery Truck"
            className="bg-transparent w-48 h-38 mr-14 drop-shadow-2xl opacity-95"
          />
        </div>
        <div className="bg-transparent h-64 flex items-center">
          <MapSVG />
        </div>
      </div>
    </div>
  );
};

export default DeliveryTruckPreview;
