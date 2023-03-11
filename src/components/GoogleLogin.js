import React from "react";
import { useEffect, useState } from "react";


function GoogleLoginFunction(){
    
    function handleCallbackResponse(response){
        console.log("Encoded JWT token: " + response.credential);
    };
    
    useEffect(() => {
        /* global google */

        google.accounts.id.initialize({
            client_id: "898782362833-dueutdv1qbl2fegui8hjekcbho9gm6o4.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline",
                size: "large",
                // scope: 'profile email',
                // width: 240,
                // height: 50,
                // longtitle: true,
                // theme: 'dark',
                // onSuccess: "onSuccess",
                // onFailure: "onFailure"
            }
        );
    },[]);

    return (
        <div className="googleLoginComponent">
            <div id="signInDiv"></div>
            
        </div>
    );
};

export default GoogleLoginFunction;