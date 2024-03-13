import styles from './styles.module.css';

const Main: React.FC = () => {
  return (
    <>
      <div className={styles.addCertContainer}>
        <button className={styles.addBtn}>Додати</button>
        <p className={styles.placeholderText}>Нема жодного сертифікату</p>
      </div>
      <div className={styles.certContainer}></div>
    </>
  );
};

export { Main };
