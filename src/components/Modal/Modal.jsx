import styles from "./Modal.module.scss";

const Modal = ({
  title,
  publishedDate,
  country,
  language,
  isMature,
  closeModal,
}) => {
  let maturityParaClasses = styles.modal__para;

  if (isMature) {
    maturityParaClasses += ` ${styles.modal__para_warning}`;
  }

  return (
    <article className={styles.modal}>
      <h2 className={styles.modal__heading}>{title}</h2>
      {country && (
        <p className={styles.modal__para}>
          <strong>Publication Country:</strong> {country}
        </p>
      )}
      {publishedDate && (
        <p className={styles.modal__para}>
          <strong>Publication Date:</strong> {publishedDate}
        </p>
      )}
      {language && (
        <p className={styles.modal__para}>
          <strong>Language:</strong> {language}
        </p>
      )}
      <p className={maturityParaClasses}>
        {isMature
          ? "Warning: Contains Mature Content"
          : "No Mature Content Reported"}
      </p>
      <button className={styles.modal__button} onClick={closeModal}>
        Close
      </button>
    </article>
  );
};

export default Modal;
