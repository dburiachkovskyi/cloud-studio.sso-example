import { useCallback } from 'react';
import styles from './App.module.scss';
import { studioURL } from './constants';
import { useNats, useNatsSub } from './providers/nats';
import { useAuth } from './use-auth';

const App = () => {
  const { user, login, logout, refresh } = useAuth(
    import.meta.env.APP_COGNITO_URL as string,
    import.meta.env.APP_COGNITO_CLIENT_ID as string
  );

  const { publish } = useNats();

  const handleNatsResponse = useCallback((msg: string) => {
    console.log('Message', msg);
  }, []);

  useNatsSub(
    'event.*.client.*.encoder.*.camera.*.response',
    handleNatsResponse
  );

  const handleSendMessage = useCallback(() => {
    publish('event.abc.client.def.encoder.ghi.camera.klm.command', 'ABC');
  }, [publish]);

  const handleGoToStudio = useCallback(() => {
    window.open(
      `${studioURL}#refresh=${localStorage.getItem('refresh_token')}`,
      '_blank'
    );
  }, []);

  return (
    <div className={styles.app}>
      <button onClick={handleSendMessage}>Send message</button>
      {user?.email ? (
        <div>
          <div>Hello, {user.email}</div>
          <div>
            <button className={styles.ssoButton} onClick={logout}>
              Logout
            </button>
            {localStorage.getItem('refresh_token') && (
              <>
                <button className={styles.ssoButton} onClick={handleGoToStudio}>
                  Studio
                </button>
                <button
                  onClick={() =>
                    refresh(localStorage.getItem('refresh_token') as string)
                  }
                >
                  Refresh
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <button className={styles.ssoButton} onClick={login}>
          Login
        </button>
      )}
    </div>
  );
};

export default App;
