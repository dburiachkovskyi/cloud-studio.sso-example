import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const parseHash = (hash: string): Record<string, string> =>
  hash
    .slice(1)
    .split('/')
    .map((v) => v.split('='))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );

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

const sendRefresh = (refreshToken: string) =>
  axios.post(
    '/api/refresh',
    {
      refreshToken,
    },
    {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

const sendAuth = async () =>
  (
    await axios.post(
      '/api/auth',
      {
        refresh_token: localStorage.getItem('refresh_token'),
        token: localStorage.getItem('token'),
        access_token: localStorage.getItem('access_token'),
      },
      {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
  ).data;

export const useAuth = (cognitoURL: string, clientId: string) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshToken, setRefreshToken] = useState('');
  const params = new URLSearchParams(window.location.search);
  const parsedHash = parseHash(location.hash);
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
    if (localStorage.getItem('token')) {
      setLoading(true);
      const user = await handleGetUser();
      if (user.email) {
        setUser(user);
      }
    }
  }, []);

  const handleRefresh = useCallback(async (token: string) => {
    const data = (await sendRefresh(token)).data;
    console.log(data);
    localStorage.setItem('token', data.id_token);
    localStorage.setItem('refresh_token', token);
    localStorage.setItem('access_token', data.access_token);
    await handleUpdateUser();
  }, []);

  const handleRefreshTokenWithRedirect = useCallback(
    async (token: string) => {
      handleRefresh(token);
      // delete parsedHash.refresh;

      // history.pushState(
      //   '',
      //   document.title,
      //   location.pathname + location.search
      // );
    },
    [parsedHash]
  );

  const handleApprove = useCallback(
    async (code?: string | null) => {
      if (code) {
        handleRemoveCodeFromURL();
        const response = await sendCode(code);
        localStorage.setItem('token', response.data.id_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
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
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  }, []);

  useEffect(() => {
    setRefreshToken(parsedHash.refresh);
  }, [parsedHash.refresh]);

  useEffect(() => {
    if (refreshToken) {
      handleRefreshTokenWithRedirect(refreshToken);
    }
  }, [refreshToken]);

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
    refresh: handleRefresh,
    user,
  };
};
