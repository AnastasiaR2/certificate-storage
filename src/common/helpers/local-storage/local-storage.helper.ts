import { type CertificateJson } from 'pkijs';

const CERTIFICATES_KEY = 'certificates';

const getCertificatesFromLocalStorage = (): CertificateJson[] => {
  const serializedCertificates = localStorage.getItem(CERTIFICATES_KEY);
  return serializedCertificates
    ? (JSON.parse(serializedCertificates) as CertificateJson[])
    : [];
};

const saveCertificateToLocalStorage = (certificate: CertificateJson): void => {
  const oldCertificates = getCertificatesFromLocalStorage();
  const isCertificateExists = oldCertificates.some((oldCertificate) => {
    return (
      oldCertificate.serialNumber.valueBlock.valueHex ===
      certificate.serialNumber.valueBlock.valueHex
    );
  });

  if (isCertificateExists) {
    throw new Error('Сертифікат з таким серійним номером вже доданий');
  }

  const updatedCertificates = [...oldCertificates, certificate];
  localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(updatedCertificates));
};

export { getCertificatesFromLocalStorage, saveCertificateToLocalStorage };
