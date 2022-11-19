import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  CountryCode,
  NewsSource,
  News,
  NewsCategory,
} from "../model/news.model.types";

type TopHeadlines = `${NewsCategory}-${CountryCode}`;

export type NewsState = {
  topHeadlines: {
    [Prop in TopHeadlines]?: News | "error";
  };
  everythingFromSources: {
    [Prop in NewsSource]?: News | "error";
  };
};

export type NewsReducers = {
  topHeadlinesLoaded: CaseReducer<NewsState, TopHeadlinesLoaded>;
  everythingFromSourceLoaded: CaseReducer<
    NewsState,
    EverythingFromSourceLoaded
  >;
};

type TopHeadlinesLoaded = PayloadAction<{
  news: News | "error";
  key: TopHeadlines;
}>;
type EverythingFromSourceLoaded = PayloadAction<{
  news: News | "error";
  key: NewsSource;
}>;
