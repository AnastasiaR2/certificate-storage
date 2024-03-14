import { type CertificateJson } from 'pkijs';

import { CertificateDates, CertificateNames } from '@/common/enums/enums.js';
import {
  getCertificateCommonName,
  getCertificateValidDate,
} from '@/common/helpers/helpers.js';

import styles from './styles.module.css';

type Properties = {
  certificate: CertificateJson;
};

const CertificateInfo: React.FC<Properties> = ({ certificate }) => {
  return (
    <div className={styles.infoBlock}>
      <ul className={styles.infoList}>
        <li>
          <span>Common Name: </span>
          {getCertificateCommonName(certificate, CertificateNames.SUBJECT)}
        </li>
        <li>
          <span>Issuer CN: </span>
          {getCertificateCommonName(certificate, CertificateNames.ISSUER)}
        </li>
        <li>
          <span>Valid From: </span>
          {getCertificateValidDate(certificate, CertificateDates.VALID_FROM)}
        </li>
        <li>
          <span>Valid To: </span>
          {getCertificateValidDate(certificate, CertificateDates.VALID_TO)}
        </li>
      </ul>
    </div>
  );
};

export { CertificateInfo };
