import React from "react";
import "../css/Socials.css";
import { Link } from "react-router-dom";

import { Group, Button, rem } from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons-react";

function Socials() {
    return (
        <div className="social-handles">
            These are our social media handles
            <div className="icon-container">
                <button className="discord2-icon">
                    <Link
                        to="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("./SocialsAssets/beforeHover/discord.png")}
                            alt="discordBeforeHover"
                        />
                        <img
                            className="discord-icon-hover"
                            src={require("./SocialsAssets/onHover/discord-fill.png")}
                            alt="discordOnHover"
                        />
                    </Link>
                </button>

                <button className="discord-icon">
                    <Link
                        to="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("./SocialsAssets/beforeHover/discord.png")}
                            alt="discordBeforeHover"
                        />
                        <img
                            className="discord-icon-hover"
                            src={require("./SocialsAssets/onHover/discord-fill.png")}
                            alt="discordOnHover"
                        />
                    </Link>
                </button>

                <button className="instagram-icon">
                    <Link
                        to="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("./SocialsAssets/beforeHover/instagram.png")}
                            alt="instagramBeforeHover"
                        />
                        <img
                            className="instagram-icon-hover"
                            src={require("./SocialsAssets/onHover/instagram-fill.png")}
                            alt="instagramOnHover"
                        />
                    </Link>
                </button>

                <button className="meta-icon">
                    <Link
                        to="https://meta.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("./SocialsAssets/beforeHover/meta.png")}
                            alt="instagramBeforeHover"
                        />
                        <img
                            className="meta-icon-hover"
                            src={require("./SocialsAssets/onHover/meta-fill.png")}
                            alt="metaOnHover"
                        />
                    </Link>
                </button>

                <Group position="center">
                    <Button
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/mantinedev"
                        leftIcon={<IconBrandTwitter size={rem(18)} />}
                        styles={(theme) => ({
                            root: {
                                backgroundColor: "#00acee",
                                border: 0,
                                height: rem(42),
                                paddingLeft: rem(20),
                                paddingRight: rem(20),
                                "&:not([data-disabled])": theme.fn.hover({
                                    backgroundColor: theme.fn.darken(
                                        "indigo",
                                        0.05
                                    ),
                                }),
                            },

                            leftIcon: {
                                marginRight: theme.spacing.md,
                            },
                        })}
                    >
                        Follow on Twitter
                    </Button>
                </Group>
                <button className="twitter-icon">
                    <Link
                        to="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("./SocialsAssets/beforeHover/twitter.png")}
                            alt="instagramBeforeHover"
                        />
                        <img
                            className="twitter-icon-hover"
                            src={require("./SocialsAssets/onHover/twitter-fill.png")}
                            alt="twitterOnHover"
                        />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Socials;
