import { useCallback } from 'react';

const loginOptions = {
  redirect_uri: import.meta.env.APP_COGNITO_REDIRECT_URL as string,
  client_id: import.meta.env.APP_COGNITO_CLIENT_ID as string,
  response_type: 'code',
  //   scope: ['email', 'openid', 'phone'].join('+'),
};
export const useAuth = () => {
  const handleLogin = useCallback(() => {
    location.replace(
      `${import.meta.env.APP_COGNITO_URL}/login?${new URLSearchParams(
        loginOptions
      ).toString()}`
    );
  }, []);

  return {
    login: handleLogin,
  };
};
