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
      <p>
        <strong>Publication Country:</strong> {country}
      </p>
      <p>
        <strong>Publication Date:</strong> {publishedDate}
      </p>
      <p>
        <strong>Language:</strong> {language}
      </p>
      <p>
        {maturity === "NOT_MATURE"
          ? "Appropriate for all audiences"
          : "Warning: May be inappropriate for younger audiences"}
      </p>
      <button onClick={closeModal}>Close</button>
    </article>
  );
};

export default Modal;
