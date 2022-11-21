import { capitalize } from "src/shared/utils";
import { Dropdown } from "../dropdown";
import { categories } from "./category-dropdown.data";
import { CategoryDropdownProps } from "./category-dropdown.types";

export const CategoryDropdown = ({
  onSelect,
  selectedValue,
}: CategoryDropdownProps) => {
  return (
    <Dropdown>
      <Dropdown.Toggle name={capitalize(selectedValue)} />
      <Dropdown.List>
        {categories.map((categoryName) => (
          <Dropdown.Item
            key={categoryName}
            selected={selectedValue === categoryName}
            onClick={() => onSelect(categoryName)}
          >
            {capitalize(categoryName)}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};
