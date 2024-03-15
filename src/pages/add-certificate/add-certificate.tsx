import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import {
  getParsedCertificate,
  saveCertificateToLocalStorage,
} from '@/common/helpers/helpers.js';

import styles from './styles.module.css';

const AddCertificate: React.FC = () => {
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const files = event.target.files;
    handleFileUpload(files);
  };

  const handleFileUpload = (files: FileList | null): void => {
    if (!files || files.length === 0) {
      return;
    }
    void handleFileSave(files[0]);
  };

  const handleFileSave = async (file: File): Promise<void> => {
    try {
      const certificate = await file.arrayBuffer();
      const parsedCertificate = getParsedCertificate(certificate);
      saveCertificateToLocalStorage(parsedCertificate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <div className={styles.backBtnContainer}>
        <NavLink to={AppRoute.ROOT}>
          <button className={styles.backBtn}>Назад</button>
        </NavLink>
      </div>
      <div className={styles.dragDropArea}>
        <p>Перетягніть файл сертифікату сюди</p>
        <p>або</p>
        <input
          type="file"
          accept=".cer"
          onChange={handleFileChange}
          className={styles.fileInput}
          id="fileInput"
          ref={inputRef}
        />
        <label htmlFor="fileInput">
          <button className={styles.fileInputBtn} onClick={handleButtonClick}>
            Виберіть через стандартний діалог
          </button>
        </label>
      </div>
      {/* {errorMessage && <div>{errorMessage}</div>} */}
    </>
  );
};

export { AddCertificate };
