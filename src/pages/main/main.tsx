import { type CertificateJson } from 'pkijs';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import { getCertificatesFromLocalStorage } from '@/common/helpers/helpers.js';

import { CertificateInfo, CertificateItem } from './components/components.js';
import styles from './styles.module.css';

const Main: React.FC = () => {
  const [certificates, setCertificates] = useState<CertificateJson[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const certificatesFromLocalStorage = getCertificatesFromLocalStorage();
    setCertificates(certificatesFromLocalStorage);
  }, []);

  const handleCertificateClick = (index: number): void => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className={styles.addCertContainer}>
        <NavLink to={AppRoute.ADD_CERTIFICATE}>
          <button className={styles.addBtn}>Додати</button>
        </NavLink>
        {certificates.length === 0 ? (
          <p className={styles.placeholderText}>Нема жодного сертифікату</p>
        ) : (
          <ul className={styles.certList}>
            {certificates.map((item, index) => (
              <CertificateItem
                certificate={item}
                key={item.serialNumber.valueBlock.valueHex}
                isSelected={index === selectedIndex}
                index={index}
                onClick={handleCertificateClick}
              />
            ))}
          </ul>
        )}
      </div>
      {certificates.length === 0 ? (
        <div className={styles.placeholderBlock}></div>
      ) : (
        <CertificateInfo certificate={certificates[selectedIndex]} />
      )}
    </>
  );
};

export { Main };
