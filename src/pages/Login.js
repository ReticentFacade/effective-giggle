import React from "react";
import "../css/Login.css";
import { MetaLogo } from "@phosphor-icons/react";
import GoogleLoginFunction from "../components/GoogleLogin";

function Login() {
    return (
        <div className="page w-full flex items-center justify-center lg:w-1/2">
            Login page
            <GoogleLoginFunction />
            
        </div>
    );
}

export default Login;
