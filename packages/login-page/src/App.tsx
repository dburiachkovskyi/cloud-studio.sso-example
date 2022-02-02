import styles from './App.module.scss';
import { useAuth } from './use-auth';

function App() {
  const { login } = useAuth();

  return (
    <div className={styles.app}>
      <button className={styles.ssoButton} onClick={login}>
        Login
      </button>
    </div>
  );
}

export default App;
