import styles from "./Book.module.scss";

const Book = ({
  id,
  title,
  authors,
  description,
  coverUrl,
  handleBookClick,
}) => {
  return (
    <article className={styles.grid__book} id={id} onClick={handleBookClick}>
      <section className={styles.book__cover}>
        <img
          className={styles.book__image}
          src={coverUrl}
          alt={`${title} Cover`}
        />
      </section>
      <section className={styles.book__details}>
        <div className={styles.book__header}>
          <h2 className={styles.book__title}>{title}</h2>
          <p className={styles.book__authors}>By {authors}</p>
        </div>
        <div></div>
        <>
          <span></span>
          <span></span>
        </>
        <div className={styles.book__main}>
          {description && (
            <p className={styles.book__description}>{description}</p>
          )}
        </div>
      </section>
    </article>
  );
};

export default Book;
