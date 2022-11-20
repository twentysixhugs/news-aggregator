import { Outlet } from "react-router-dom";
import { LayoutContainer, LayoutHeader } from "./layout.styles";

export const Layout = () => {
  return (
    <LayoutContainer>
      <LayoutHeader>News Aggregator</LayoutHeader>
      <Outlet />
    </LayoutContainer>
  );
};
