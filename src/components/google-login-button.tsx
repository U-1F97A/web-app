import * as React from 'react';
import { FC, useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton: FC = () => {
  const [accessToken, setAccessToken] = useState('');

  const loginSuccess = (response: any) => {
    setAccessToken(response.accessToken);
    console.log(response);
  };

  const loginError = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.CLIENT_ID ?? ''}
        buttonText="Login"
        onSuccess={loginSuccess}
        onFailure={loginError}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLoginButton;
