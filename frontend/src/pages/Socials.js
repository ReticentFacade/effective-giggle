import React, { useState } from "react";
import "../css/Socials.css";
import { Link } from "react-router-dom";
import {
  DiscordLogo,
  MetaLogo,
  TwitterLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

function Socials() {
  const [discordHovered, setDiscordHovered] = useState(false);
  const [metaHovered, setMetaHovered] = useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false);
  const [instagramHovered, setInstagramHovered] = useState(false);

  const buttonClasses = `ease-in-out transform hover:scale-125 transition duration-500 px-6 py-2 m-6 inline`;
  const discordBgClass = discordHovered ? "bg-dark-button" : "bg-light-button";
  const discordColor = discordHovered ? "#e5e5cb" : "#3d2b21";
  
  const metaBgClass = metaHovered ? "bg-dark-button" : "bg-light-button";
  const metaColor = metaHovered ? "#e5e5cb" : "#3d2b21";

  const twitterBgClass = twitterHovered ? "bg-dark-button" : "bg-light-button";
  const twitterColor = twitterHovered ? "#e5e5cb" : "#3d2b21";

  const instagramBgClass = instagramHovered ? "bg-dark-button" : "bg-light-button";
  const instagramColor = instagramHovered ? "#e5e5cb" : "#3d2b21";

  return (
    <div className="socials-container px-4 pt-12 mt-10 ml-11 mr-32">
      <h1 className="overflow-hidden lg:text-3xl font-bold underline sm:pb-12 sm:mt-10 sm:mb-20">
        Connect with us on social media! <br />
      </h1>

      <div className="social-btns">
        <button className={buttonClasses}>
          <Link to="https://discord.gg/3vXzG8J">
            <DiscordLogo
              size={52}
              color={discordColor}
              weight="fill"
              className={discordBgClass}
              onMouseEnter={() => setDiscordHovered(true)}
              onMouseLeave={() => setDiscordHovered(false)}
            />
          </Link>
        </button>

        <button className={buttonClasses}>
          <Link to="https://facebook.com">
            <MetaLogo
              size={52}
              color={metaColor}
              weight="fill"
              className={metaBgClass}
              onMouseEnter={() => setMetaHovered(true)}
              onMouseLeave={() => setMetaHovered(false)}
            />
          </Link>
        </button>

        <button className={buttonClasses}>
          <Link to="https://twitter.com">
            <TwitterLogo
              size={52}
              color={twitterColor}
              weight="fill"
              className={twitterBgClass}
              onMouseEnter={() => setTwitterHovered(true)}
              onMouseLeave={() => setTwitterHovered(false)}
            />
          </Link>
        </button>

        <button className={buttonClasses}>
          <Link to="https://instagram.com">
            <InstagramLogo
              size={52}
              color={instagramColor}
              weight="fill"
              className={instagramBgClass}
              onMouseEnter={() => setInstagramHovered(true)}
              onMouseLeave={() => setInstagramHovered(false)}
            />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Socials;
