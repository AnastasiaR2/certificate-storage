import { type CertificateJson } from '@/common/types/types.js';

const CERTIFICATES_KEY = 'certificates';

const saveCertificateToLocalStorage = (
  certificates: CertificateJson[],
): void => {
  localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(certificates));
};

export { saveCertificateToLocalStorage };
