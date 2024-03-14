import { type CertificateJson } from 'pkijs';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute, CertificateInfo } from '@/common/enums/enums.js';
import {
  getCertificateInfo,
  getCertificatesFromLocalStorage,
} from '@/common/helpers/helpers.js';

import { CertificateItem } from './components/components.js';
import styles from './styles.module.css';

const Main: React.FC = () => {
  const [certificates, setCertificates] = useState<CertificateJson[]>([]);

  useEffect(() => {
    const certificatesFromLocalStorage = getCertificatesFromLocalStorage();
    console.log(certificatesFromLocalStorage);
    setCertificates(certificatesFromLocalStorage);
  }, []);

  return (
    <>
      <div className={styles.addCertContainer}>
        <NavLink to={AppRoute.ADD_CERTIFICATE}>
          <button className={styles.addBtn}>Додати</button>
        </NavLink>
        {certificates.length === 0 ? (
          <p className={styles.placeholderText}>Нема жодного сертифікату</p>
        ) : (
          <ul>
            {certificates.map((item, index) => (
              <CertificateItem
                certificate={item}
                key={item.serialNumber.valueBlock.valueHex}
                index={index}
              />
            ))}
          </ul>
        )}
      </div>
      <div className={styles.certContainer}></div>
    </>
  );
};

export { Main };
