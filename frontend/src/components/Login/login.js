import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function LoginComponent() {
    return (
        <div className="login-component">
            <GoogleLogin
                onSuccess = {credentialResponse => {
                    console.log(credentialResponse.credential);
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                }}
                onError = {() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    );
}

export default LoginComponent;
