import React from "react";
import "../css/Socials.css";
import { Link } from "react-router-dom";
import WaveAnimation from "../components/Socials/WaveAnimation";

import { Group, Button, rem } from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons-react";

function Socials() {
  return (
    <div className="social-handles">
      These are our social media handles
      <h1>
        <WaveAnimation />
        Follow Us <a href="/" target="_blank"></a> On{" "}
        <a href="//" target="_blank">
          Social Media!
        </a>
      </h1>
      <svg class="wave-top" width="100" viewBox="0 0 1200 250">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z"
          fill="#3D2B21"
        />
      </svg>
    </div>
  );
}

export default Socials;
