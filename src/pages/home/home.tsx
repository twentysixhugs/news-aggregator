import { CategoryDropdown } from "src/components/category-dropdown";
import { CountryDropdown } from "src/components/country-dropdown";
import { useEffect, useState } from "react";
import {
  CountryCode,
  NewsCategory,
} from "src/features/news/model/news.model.types";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { fetchTopHeadlines } from "src/features/news/api/news.api";
import { StyledDropdownsWrapper } from "./home.styles";
import { NewsEntry } from "./components/news-entry";

export const Home = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>("us");

  const [category, setCategory] = useState<NewsCategory>("general");

  const topHeadlines = useAppSelector((state) => state.topHeadlines);

  const selectedTopHeadlines = topHeadlines[`${category}-${countryCode}`];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopHeadlines(countryCode, category));
  }, [dispatch, countryCode, category]);

  return (
    <>
      <span>
        Total results:{" "}
        {selectedTopHeadlines &&
          selectedTopHeadlines !== "error" &&
          selectedTopHeadlines.totalResults}
      </span>
      <StyledDropdownsWrapper>
        <CountryDropdown
          selectedValue={countryCode}
          onSelect={(countryCode) => setCountryCode(countryCode)}
        />
        <CategoryDropdown
          selectedValue={category}
          onSelect={(category) => setCategory(category)}
        />
      </StyledDropdownsWrapper>
      {selectedTopHeadlines &&
        selectedTopHeadlines !== "error" &&
        selectedTopHeadlines.articles.map((el) => (
          <NewsEntry
            key={el.url}
            url={el.url}
            author={el.author}
            description={el.description}
            imgUrl={el.urlToImage}
            publishedAt={new Date(el.publishedAt)}
            title={el.title}
          />
        ))}
    </>
  );
};
