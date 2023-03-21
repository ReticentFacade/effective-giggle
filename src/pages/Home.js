import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/coffee-beans-with-jute-bag.png";
import { ShoppingBag } from "@phosphor-icons/react";
import "../css/Home.css";

import {
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    rem,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(300);

function LeadGrid() {
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - $ {theme.spacing.md} / 2)`;

    return (
        <Container my="md" className="container">
            <SimpleGrid
                cols={2}
                spacing="md"
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
                <div className="coffee-bean-bag">
                    <Skeleton
                        className="image-container"
                        height={PRIMARY_COL_HEIGHT}
                        radius="md"
                        animate={false}
                    >
                        <img src={Image} alt="coffee-bean-bag" />
                    </Skeleton>
                </div>

                    <Grid gutter="md" className="sub-container">
                        <div className="text-container">
                            <Grid.Col span={6}>
                                <Skeleton
                                    height={SECONDARY_COL_HEIGHT}
                                    radius="md"
                                    animate={false}
                                />
                                <div className="home-text">
                                    Get the best coffee beans
                                    <br />
                                    EVER! <br />
                                </div>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Skeleton
                                    height={SECONDARY_COL_HEIGHT}
                                    radius="md"
                                    animate={false}
                                />
                            </Grid.Col>
                        </div>
                        <Grid.Col>
                            <Skeleton
                                height={SECONDARY_COL_HEIGHT}
                                radius="md"
                                animate={false}
                            />
                            <Link to="/order">
                                <button className="order-now font-bold py-2 px-4 rounded-full">
                                    <div className="button-club">
                                        <ShoppingBag
                                            size={32}
                                            color="#3d2b21"
                                            weight="fill"
                                        />
                                        Order Now!
                                    </div>
                                </button>
                            </Link>
                        </Grid.Col>
                    </Grid>
            </SimpleGrid>
        </Container>
    );
}

function Home() {
    return (
        <div className="page home-page">
            <LeadGrid />
            {/* <div className="container w-full flex items-center justify-center lg:w-1/2">
                <div className="coffee-bean-bag">
                    <img src={Image} alt="coffee-bean-bag"/>
                </div>

                <p className="home-text">
                    Get the best 
                    <br />
                    COFFEE 
                    <br />
                    ever! 
                    <br />
                    <br />
                    Order NOW!
                </p>
            </div> */}
        </div>
    );
}

export default Home;
