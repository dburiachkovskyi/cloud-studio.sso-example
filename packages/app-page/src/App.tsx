import styles from './App.module.scss';
import { useAuth } from './use-auth';

function App() {
  const { user } = useAuth();

  return <div className={styles.app}>{JSON.stringify(user)}</div>;
}

export default App;
