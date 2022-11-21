import { CategoryDropdown } from "src/components/category-dropdown";
import { CountryDropdown } from "src/components/country-dropdown";
import { useEffect, useState } from "react";
import {
  CountryCode,
  NewsCategory,
} from "src/features/news/model/news.model.types";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { fetchTopHeadlines } from "src/features/news/api/news.api";
import { StyledDropdownsWrapper, TotalResults } from "./home.styles";
import { NewsEntry } from "./components/news-entry";
import { NewsEntryError } from "src/components/news-entry-error";
import { Loader } from "src/components/loader";

export const Home = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>("us");

  const [category, setCategory] = useState<NewsCategory>("general");

  const topHeadlines = useAppSelector((state) => state.topHeadlines);

  const selectedTopHeadlines = topHeadlines[`${category}-${countryCode}`];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopHeadlines(countryCode, category));
  }, [dispatch, countryCode, category]);

  const handleTryAgain = () => {
    dispatch(fetchTopHeadlines(countryCode, category));
  };

  let resultView, totalResultsView;

  if (selectedTopHeadlines === "error") {
    resultView = (
      <NewsEntryError
        text="Something went wrong when getting news data"
        onTryAgain={handleTryAgain}
      />
    );
    totalResultsView = "Error";
  } else if (!selectedTopHeadlines) {
    resultView = <Loader />;
    totalResultsView = "";
  } else {
    resultView = selectedTopHeadlines.articles.map((el) => (
      <NewsEntry
        key={el.url}
        url={el.url}
        author={el.author}
        description={el.description}
        imgUrl={el.urlToImage}
        publishedAt={new Date(el.publishedAt)}
        title={el.title}
      />
    ));

    totalResultsView = selectedTopHeadlines.totalResults;
  }

  return (
    <>
      <TotalResults>Total results: {totalResultsView}</TotalResults>
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
      {resultView}
    </>
  );
};
