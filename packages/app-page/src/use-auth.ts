import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const sendCode = (code: string) =>
  axios.post(
    '/api/token',
    {
      code,
    },
    {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

const sendAuth = async() =>
  (
    await axios.get('/api/auth', {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  ).data;

export const useAuth = (cognitoURL: string, clientId: string) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleRemoveCodeFromURL = useCallback(() => {
    params.delete('code');
    const newParams = params.toString();
    window.history.replaceState(
      {},
      document.title,
      `/${newParams ? `?${newParams}` : ''}`
    );
  }, []);

  const handleGetUser = useCallback(async () => sendAuth(), []);

  const handleUpdateUser = useCallback(async () => {
    setLoading(true);
    const user = await handleGetUser();
    if (user.email) {
      setUser(user);
    }
  }, []);

  const handleApprove = useCallback(
    async (code?: string | null) => {
      if (code) {
        handleRemoveCodeFromURL();
        const response = await sendCode(code);
        if (response.data.access_token) {
          handleUpdateUser();
        }
      }
    },
    [params, handleRemoveCodeFromURL]
  );

  const handleLogin = useCallback(() => {
    location.replace(
      `${cognitoURL}/login?${new URLSearchParams({
        redirect_uri: window.location.origin,
        client_id: clientId,
        response_type: 'code',
        //   scope: ['email', 'openid', 'phone'].join('+'),
      }).toString()}`
    );
  }, []);

  const handleLogout = useCallback(async () => {
    setLoading(true);
    await axios.get('/api/logout', {
      withCredentials: true,
    });
    setUser(null);
    setLoading(false);
  }, []);

  useEffect(() => {
    handleUpdateUser();
  }, [handleUpdateUser]);

  useEffect(() => {
    handleApprove(code);
  }, [code]);

  return {
    loading,
    login: handleLogin,
    logout: handleLogout,
    user,
  };
};
