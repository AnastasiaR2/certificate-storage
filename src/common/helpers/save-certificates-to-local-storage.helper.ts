import { type CertificateJson } from 'pkijs';

import { CERTIFICATES_KEY } from '@/common/constants/constants.js';

const saveCertificatesToLocalStorage = (
  certificates: CertificateJson[],
): void => {
  localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(certificates));
};

export { saveCertificatesToLocalStorage };
