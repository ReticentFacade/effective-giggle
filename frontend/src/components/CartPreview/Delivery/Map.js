import React, { useEffect } from "react";
import "../../../css/Map.css";
import anime from "animejs";

const MapSVG = () => {
  useEffect(() => {
    const timeline = anime.timeline({
      easing: "linear",
    });

    timeline.add({
      targets: ".start",
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 300,
      delay: anime.stagger(350),
    });

    timeline.add({
      targets: ".in-between",
      strokeDashoffset: [0, anime.setDashoffset],
      duration: 700,
    });

    timeline.add({
      targets: ".end",
      rotate: [20, 0],
      opacity: [0, 1],
      easing: "easeOutBounce",
      duration: 500,
    });
  }, []);

  return (
    <div className="map-body bg-transparent">
      <svg viewBox="0 0 100 100" className="map-svg">
        <rect width="100" height="100" rx="2" fill="#e5e5cb" />
        <g
          fill="none"
          stroke="rgb(61, 43, 33)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* <!-- dashed trail --> */}
          <g transform="translate(20 35)">
            <path
              d="M 0 0 v 25 h 15 l 10 -15 h 10 v 20 h 25"
              strokeDasharray="3 6"
              strokeDashoffset="2"
            />
            {/* <!-- animate the dash of a line atop the already dashed line --> */}
            <path
              className="in-between"
              stroke="#E5E5CB"
              strokeWidth="2.5"
              d="M 60 30 h -25 v -20 h -10 l -10 15 h -15 v -25"
            />
          </g>

          {/* <!-- include the x character atop the dashed trail --> */}
          <g transform="translate(20 35)">
            {/* <!-- duplicate the path element describing the x sign to animate the segments in sequence --> */}
            <path className="start" d="M -3 -3 l 6 6" />
            <path className="start" d="M 3 -3 l -6 6" />
          </g>

          {/* <!-- goalpost icon --> */}
          <g transform="translate(80 65)">
            {/* <!-- position the group by rotating the shape from a point on the right side --> */}
            <g transform="translate(40 20)">
              <g className="end">
                <g transform="translate(-40 -20)">
                  <path d="M 0 0 q 6 -6 6 -10 a 6 6 0 0 0 -12 0 q 0 4 6 10" />
                  <circle cy="-10" r="2" stroke="none" fill="rgb(61, 43, 33)" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default MapSVG;
