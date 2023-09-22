export const formatAuthorNames = (authors) => {
  if (authors.length < 1) {
    return "Unknown Author(s)";
  }
  if (authors.length === 1) {
    return authors[0];
  }
  const authorStr = authors.slice(0, -1).join(", ");
  const lastAuthor = authors[authors.length - 1];
  return authorStr + " and " + lastAuthor;
};

export const setCoverImageUrl = (coverUrl) => {
  return coverUrl ? coverUrl : "noimage.jpg";
};
