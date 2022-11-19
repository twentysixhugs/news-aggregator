import { News } from "../model/news.model.types";
import { GetNewsResponse } from "./news.api.types";

export const processNewsData = (res: GetNewsResponse): News => {
  const { totalResults, articles } = res;

  return {
    totalResults,
    articles: articles.map((article) => ({
      sourceUrl: article.source.name,
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
    })),
  };
};
