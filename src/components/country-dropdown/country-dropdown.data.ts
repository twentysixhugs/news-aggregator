import { CountryCode } from "src/features/news/model/news.model.types";

type Country = { code: CountryCode; name: string };

export const countries: Country[] = [
  {
    code: "us",
    name: "United States",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "in",
    name: "India",
  },
  {
    code: "gb",
    name: "Great Britain",
  },
  {
    code: "fr",
    name: "France",
  },
];
