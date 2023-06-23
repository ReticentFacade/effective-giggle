import React from "react";
import "../css/Login.css";
import LoginComponent from "../components/Login/login";

import { Button, ButtonProps, Group } from "@mantine/core";
import { DiscordIcon } from "@mantine/ds";

function Login() {
    return (
        <div className="login-page page w-full flex items-center justify-center lg:w-1/2">
            <div className="login-text">Login Here:</div>
            <div className="login-component">
                <LoginComponent />
            </div>
        </div>
    );
}

export default Login;
