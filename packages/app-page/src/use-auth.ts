import { useCallback, useEffect, useState } from 'react';

const verifyOptions = (code: string) =>
  new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    client_id: import.meta.env.APP_COGNITO_CLIENT_ID as string,
    redirect_uri: location.href.replace(/\/$/, ''),
  });

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
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

  const handleApprove = useCallback(
    async (code?: string | null) => {
      if (code) {
        handleRemoveCodeFromURL();
        const data = await (
          await fetch(`${import.meta.env.APP_COGNITO_URL}/oauth2/token`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: verifyOptions(code),
          })
        ).json();

        if (data.access_token) {
          setUser(data);
        }
      }
    },
    [params, handleRemoveCodeFromURL]
  );

  useEffect(() => {
    handleApprove(code);
  }, [code]);

  return {
    user,
  };
};
