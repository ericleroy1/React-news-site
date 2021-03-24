import React from 'react';
import GoogleLogout from 'react-google-login';

const clientID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function SignoutButton() {

const onSuccess= () => {
    alert('Successfully logged out!')
}

    return (
        <div>
            <GoogleLogout
      clientId={clientID}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    ></GoogleLogout>
        </div>
    )
}

export default SignoutButton
