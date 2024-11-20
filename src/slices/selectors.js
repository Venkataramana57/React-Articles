export const selectAllArticles = (state) => state.articles.articles;

export const selectArticleById = (state, artId) => {
  return state.articles.find((art) => art.id == artId);
};
