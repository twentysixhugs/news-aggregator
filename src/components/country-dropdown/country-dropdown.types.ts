import { CountryCode } from "src/features/news/model/news.model.types";

export type CountryDropdownProps = {
  onSelect: (countryCode: CountryCode) => void;
  selectedValue: CountryCode;
};
