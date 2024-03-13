import { NavLink } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';

import styles from './styles.module.css';

const AddCertificate: React.FC = () => {
  return (
    <>
      <NavLink to={AppRoute.ROOT}>
        <button className={styles.addBtn}>Назад</button>
      </NavLink>
      <div className={styles.certContainer}></div>
    </>
  );
};

export { AddCertificate };
