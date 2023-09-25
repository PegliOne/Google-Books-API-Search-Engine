import styles from "./Modal.module.scss";

const Modal = ({
  title,
  publishedDate,
  country,
  language,
  maturity,
  closeModal,
}) => {
  return (
    <article className={styles.modal}>
      <h2>{title}</h2>
      <p className={styles.modal__para}>
        <strong>Publication Country:</strong> {country}
      </p>
      <p className={styles.modal__para}>
        <strong>Publication Date:</strong> {publishedDate}
      </p>
      <p className={styles.modal__para}>
        <strong>Language:</strong> {language}
      </p>
      <p className={styles.modal__para}>
        {maturity === "NOT_MATURE"
          ? "Appropriate for all audiences"
          : "Warning: May be inappropriate for younger audiences"}
      </p>
      <button className={styles.modal__button} onClick={closeModal}>
        Close
      </button>
    </article>
  );
};

export default Modal;
