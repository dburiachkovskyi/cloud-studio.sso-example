import { useCallback, useEffect, useState } from 'react';

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

  const handleGetUser = useCallback(
    async () => (await fetch('/api/auth')).json(),
    []
  );

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
        const data = await (
          await fetch('/api/token', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              code,
            }),
          })
        ).json();
        if (data.access_token) {
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
    await fetch('/api/logout');
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
