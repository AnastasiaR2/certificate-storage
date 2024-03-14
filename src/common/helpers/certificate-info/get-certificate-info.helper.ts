import { type CertificateJson } from 'pkijs';

import { CertificateDates, CertificateNames } from '@/common/enums/enums.js';
import { type ValueOf } from '@/common/types/types.js';

const COMMON_NAME_ATTRIBUTE = '2.5.4.3';

type Value = {
  valueBlock: {
    value: string;
  };
};

const getValueByType = (
  values: { type: string; value: Value }[],
  type: string,
): string | undefined => {
  const attribute = values.find((attr) => attr.type === type);
  return attribute?.value.valueBlock.value;
};

const getCertificateCommonName = (
  certificate: CertificateJson,
  type: ValueOf<typeof CertificateNames>,
): string | undefined => {
  switch (type) {
    case CertificateNames.SUBJECT: {
      return getValueByType(
        certificate.subject.typesAndValues,
        COMMON_NAME_ATTRIBUTE,
      );
    }
    case CertificateNames.ISSUER: {
      return getValueByType(
        certificate.issuer.typesAndValues,
        COMMON_NAME_ATTRIBUTE,
      );
    }
    default: {
      return undefined;
    }
  }
};

const getCertificateValidDate = (
  certificate: CertificateJson,
  type: ValueOf<typeof CertificateDates>,
): string | undefined => {
  const validDate =
    type === CertificateDates.VALID_FROM
      ? (certificate.notBefore.value as unknown)
      : (certificate.notAfter.value as unknown);
  return (validDate as string).split('T')[0];
};

export { getCertificateCommonName, getCertificateValidDate };
