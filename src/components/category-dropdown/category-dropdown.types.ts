import { NewsCategory } from "src/features/news/model/news.model.types";

export type CategoryDropdownProps = {
  onSelect: (category: NewsCategory) => void;
  selectedValue: NewsCategory;
};
