import styles from "./Book.module.scss";

const Book = ({ title, author, description, coverUrl }) => {
  return (
    <article className={styles.grid__book}>
      <img
        className={styles.book__cover}
        src={coverUrl}
        alt={`${title} Cover`}
      />
      <section className={styles.book__details}>
        <div className={styles.book__header}>
          <h2 className={styles.book__title}>{title}</h2>
          <p className={styles.book__author}>By {author}</p>
        </div>
        <p className={styles.book__description}>{description}</p>
      </section>
    </article>
  );
};

export default Book;
