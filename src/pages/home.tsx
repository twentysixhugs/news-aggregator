import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { fetchTopHeadlines } from "src/features/news/api/news.api";

export const Home = () => {
  const dispatch = useAppDispatch();
  const topHeadlines = useAppSelector((state) => state.topHeadlines);

  useEffect(() => {
    dispatch(fetchTopHeadlines("au", "business"));
  }, [dispatch]);

  useEffect(() => {
    console.log(topHeadlines);
  }, [topHeadlines]);

  return <div>Home page</div>;
};
