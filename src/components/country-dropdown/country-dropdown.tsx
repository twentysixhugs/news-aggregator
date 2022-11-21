import { useMediaQuery } from "src/shared/hooks/useMediaQuery";
import { Dropdown } from "../dropdown";
import { countries } from "./country-dropdown.data";
import { CountryDropdownProps } from "./country-dropdown.types";

export const CountryDropdown = ({
  onSelect,
  selectedValue,
}: CountryDropdownProps) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        name={
          countries.find((country) => country.code === selectedValue)?.name ||
          "Country"
        }
      />
      <Dropdown.List>
        {countries.map(({ name, code }) => (
          <Dropdown.Item
            key={code}
            selected={selectedValue === code}
            onClick={() => onSelect(code)}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};
