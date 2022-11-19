import { createSlice } from "@reduxjs/toolkit";
import { NewsReducers, NewsState } from "./news.slice.types";

const initialState: NewsState = {
  topHeadlines: {},
  everythingFromSources: {},
};

export const newsSlice = createSlice<NewsState, NewsReducers>({
  name: "news",
  initialState,
  reducers: {
    topHeadlinesLoaded: (state, action) => {
      state.topHeadlines[action.payload.key] = action.payload.news;
    },
    everythingFromSourceLoaded: (state, action) => {
      state.everythingFromSources[action.payload.key] = action.payload.news;
    },
  },
});

export const { topHeadlinesLoaded, everythingFromSourceLoaded } =
  newsSlice.actions;
