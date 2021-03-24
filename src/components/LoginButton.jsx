import React from "react";
import GoogleLogin from "react-google-login";

const clientID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function LoginButton() {

const onSuccess = (res) =>{
    console.log('[Login Success] currentUser', res.profileObj)
};

const onFailure = (res) =>{
    console.log('[Login Failure] res:', res)
}

    return (
        <div>
            <GoogleLogin
    clientId={clientID}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />
        </div>
    )
}

export default LoginButton
