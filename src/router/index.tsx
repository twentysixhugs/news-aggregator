import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/home";
import { NewsItem } from "src/pages/news-item";
import { HomeRoute } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path={HomeRoute.NewsItem} element={<NewsItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
