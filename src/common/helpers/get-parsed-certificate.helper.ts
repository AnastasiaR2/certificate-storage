import { fromBER } from 'asn1js';
import { Certificate, type CertificateJson } from 'pkijs';

const getParsedCertificate = (
  certificate: ArrayBuffer | Uint8Array,
): CertificateJson => {
  const asn1 = fromBER(certificate);
  if (asn1.offset === -1) {
    throw new Error('Помилка: Неправильна структура сертифікату');
  }

  return new Certificate({ schema: asn1.result }).toJSON();
};

export { getParsedCertificate };
