import { useCallback } from 'react';
import styles from './App.module.scss';
import { studioURL } from './constants';
import { getEncoderConfigAllMessage, useNatsSub } from './providers/nats';
import { useAuth } from './use-auth';

const App = () => {
  const { user, login, logout, refresh } = useAuth(
    import.meta.env.APP_COGNITO_URL as string,
    import.meta.env.APP_COGNITO_CLIENT_ID as string
  );

  const handleNatsResponse = useCallback((msg: any) => {
    console.log('Message', msg);
  }, []);

  const { publish } = useNatsSub(
    'event.*.client.*.encoder.*.camera.*',
    handleNatsResponse
  );

  useNatsSub('event.*.client.*.encoder.*.camera.*', () => {});
  useNatsSub('event.*.client.*.encoder.*.camera.*', () => {});
  useNatsSub('event.*.client.*.encoder.*.camera.*', () => {});
  useNatsSub('event.*.client.*.encoder.*.camera.*', () => {});
  useNatsSub('event.*.client.*.encoder.*.camera.*', () => {});

  const handleSendMessage = useCallback(() => {
    publish(
      getEncoderConfigAllMessage({
        requestId: {
          id: 'req-1',
        },
        eventCreds: {
          custId: 'cid',
          eventUid: 'euid',
          authToken: 'token',
        },
        encoderId: {
          encoderId: 'enc',
        },
        clientCreds: {
          clientId: 'cli',
        },
        timeUs: 123,
        configKey: 12,
      })
    );
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
