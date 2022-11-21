import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "src/components/layout";
import { Home } from "src/pages/home/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
