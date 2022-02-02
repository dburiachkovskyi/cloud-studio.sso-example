import styles from './App.module.scss';
import { useAuth } from './use-auth';

function App() {
  const { user, login, logout } = useAuth(
    import.meta.env.APP_COGNITO_URL,
    import.meta.env.APP_COGNITO_CLIENT_ID
  );

  return (
    <div className={styles.app}>
      {user?.email ? (
        <div>
          <div>Hello, {user.email}</div>
          <div>
            <button className={styles.ssoButton} onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <button className={styles.ssoButton} onClick={login}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;
