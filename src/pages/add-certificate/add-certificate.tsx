import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute } from '@/common/enums/enums.js';
import {
  getParsedCertificate,
  saveCertificateToLocalStorage,
} from '@/common/helpers/helpers.js';

import styles from './styles.module.css';

const SUCCESS_MESSAGE = 'Сертифікат успішно завантажено';

const AddCertificate: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const files = event?.dataTransfer?.files;
    if (files) {
      handleFileUpload(files);
    }
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
      setMessage(SUCCESS_MESSAGE);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  };

  const handleButtonClick = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    const preventDefault = (event: DragEvent): void => {
      event.preventDefault();
    };

    document.addEventListener('dragover', preventDefault);
    document.addEventListener('drop', preventDefault);

    return () => {
      document.removeEventListener('dragover', preventDefault);
      document.removeEventListener('drop', preventDefault);
    };
  }, []);

  return (
    <>
      <div className={styles.backBtnContainer}>
        <NavLink to={AppRoute.ROOT}>
          <button className={styles.backBtn}>Назад</button>
        </NavLink>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={styles.dragDropArea}
      >
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
        {message && <div>{message}</div>}
      </div>
    </>
  );
};

export { AddCertificate };
