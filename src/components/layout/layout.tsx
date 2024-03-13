import { Outlet as RouterOutlet } from 'react-router-dom';

import styles from './styles.module.css';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <RouterOutlet />
    </div>
  );
};

export { Layout };
