import { type CertificateJson } from 'pkijs';

import ArrowIcon from '@/assets/images/icons/arrow-right.svg?react';
import { CertificateNames } from '@/common/enums/enums.js';
import {
  getCertificateCommonName,
  getValidClassNames,
} from '@/common/helpers/helpers.js';

import styles from './styles.module.css';

type Properties = {
  certificate: CertificateJson;
  index: number;
  isSelected: boolean;
  onClick: (index: number) => void;
};

const CertificateItem: React.FC<Properties> = ({
  certificate,
  index,
  isSelected,
  onClick,
}) => {
  const handleClick = (): void => {
    onClick(index);
  };

  return (
    <li
      className={getValidClassNames(styles.item, isSelected && styles.selected)}
      onClick={handleClick}
    >
      {getCertificateCommonName(certificate, CertificateNames.SUBJECT)}
      {isSelected && <ArrowIcon />}
    </li>
  );
};

export { CertificateItem };
