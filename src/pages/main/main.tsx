import { NavLink } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';

import styles from './styles.module.css';

const Main: React.FC = () => {
  return (
    <>
      <div className={styles.addCertContainer}>
        <NavLink to={AppRoute.ADD_CERTIFICATE}>
          <button className={styles.addBtn}>Додати</button>
        </NavLink>
        <p className={styles.placeholderText}>Нема жодного сертифікату</p>
      </div>
      <div className={styles.certContainer}></div>
    </>
  );
};

export { Main };
