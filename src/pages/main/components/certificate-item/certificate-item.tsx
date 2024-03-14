import { type CertificateJson } from 'pkijs';

import { CertificateNames } from '@/common/enums/enums.js';
import { getCertificateCommonName } from '@/common/helpers/helpers.js';

import styles from './styles.module.css';

type Properties = {
  certificate: CertificateJson;
  index: number;
};

const CertificateItem: React.FC<Properties> = ({ certificate, index }) => {
  return (
    <li className={styles.item}>
      {getCertificateCommonName(certificate, CertificateNames.SUBJECT)},
    </li>
  );
};

export { CertificateItem };
