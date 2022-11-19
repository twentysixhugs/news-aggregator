export type CountryCode = "in" | "us" | "au" | "ru" | "fr" | "gb";

export type NewsCategory =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

export type NewsSource = "bbc-news" | "cnn" | "fox-news" | "google-news";

export type News = {
  totalResults: number;
  articles: Article[];
};

export type Article = {
  sourceUrl: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
