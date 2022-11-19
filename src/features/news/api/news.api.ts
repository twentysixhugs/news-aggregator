import { makeRequest } from "src/api/makeRequest";
import { AppThunk } from "src/app/store";
import {
  CountryCode,
  NewsCategory,
  NewsSource,
} from "../model/news.model.types";
import {
  everythingFromSourceLoaded,
  topHeadlinesLoaded,
} from "../slice/news.slice";
import { processNewsData } from "./news.api.helpers";
import { GetNewsResponse } from "./news.api.types";

export const fetchTopHeadlines =
  (countryCode: CountryCode, category: NewsCategory): AppThunk =>
  async (dispatch, getState) => {
    try {
      const res = await makeRequest<GetNewsResponse>({
        endpoint: `/top-headlines/category/${category}/${countryCode}.json`,
      });

      dispatch(
        topHeadlinesLoaded({
          news: processNewsData(res),
          key: `${category}-${countryCode}`,
        })
      );
    } catch (e) {
      dispatch(
        topHeadlinesLoaded({
          news: "error",
          key: `${category}-${countryCode}`,
        })
      );
    }
  };

export const fetchEverythinigFromSource =
  (source: NewsSource): AppThunk =>
  async (dispatch, getState) => {
    try {
      const res = await makeRequest<GetNewsResponse>({
        endpoint: `/everything/${source}.json`,
      });

      dispatch(
        everythingFromSourceLoaded({
          news: processNewsData(res),
          key: `${source}`,
        })
      );
    } catch (e) {
      everythingFromSourceLoaded({
        news: "error",
        key: `${source}`,
      });
    }
  };
