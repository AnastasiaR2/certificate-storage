import { type CertificateJson } from 'pkijs';

const CERTIFICATES_KEY = 'certificates';

const getCertificatesFromLocalStorage = (): CertificateJson[] => {
  const serializedCertificates = localStorage.getItem(CERTIFICATES_KEY);
  return serializedCertificates
    ? (JSON.parse(serializedCertificates) as CertificateJson[])
    : [];
};

const saveCertificateToLocalStorage = (certificate: CertificateJson): void => {
  const existingCertificates = getCertificatesFromLocalStorage();
  const updatedCertificates = [...existingCertificates, certificate];
  localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(updatedCertificates));
};

export { getCertificatesFromLocalStorage, saveCertificateToLocalStorage };
