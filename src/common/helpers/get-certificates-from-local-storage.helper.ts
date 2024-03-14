import { type CertificateJson } from 'pkijs';

import { CERTIFICATES_KEY } from '@/common/constants/constants.js';

const getCertificatesFromLocalStorage = (): CertificateJson[] => {
  const serializedCertificates = localStorage.getItem(CERTIFICATES_KEY);
  console.log(serializedCertificates);
  return serializedCertificates
    ? (JSON.parse(serializedCertificates) as CertificateJson[])
    : [];
};

export { getCertificatesFromLocalStorage };
