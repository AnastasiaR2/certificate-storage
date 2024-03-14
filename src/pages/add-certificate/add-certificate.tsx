import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import {
  getParsedCertificate,
  saveCertificateToLocalStorage,
} from '@/common/helpers/helpers.js';

import styles from './styles.module.css';

const AddCertificate: React.FC = () => {
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    void handleFileSave(files);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const files = event.target.files;
    void handleFileSave(files);
  };

  const handleFileSave = async (files: FileList | null): Promise<void> => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    try {
      const certificate = await file.arrayBuffer();
      const parsedCertificate = getParsedCertificate(certificate);
      saveCertificateToLocalStorage(parsedCertificate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavLink to={AppRoute.ROOT}>
        <button className={styles.addBtn}>Назад</button>
      </NavLink>
      <div className={styles.certContainer}>
        <input
          type="file"
          accept=".cer"
          onChange={handleFileChange}
          // style={{ display: 'none' }}
          id="fileInput"
        />
        {/* {errorMessage && <div>{errorMessage}</div>} */}
        {/* <label htmlFor="fileInput" className={styles.fileInputLabel}>
          Drag and drop or click to upload a .cer file
        </label> */}
      </div>
    </>
  );
};

export { AddCertificate };
