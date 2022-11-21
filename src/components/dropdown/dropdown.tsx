import React, { useContext, useState } from "react";
import {
  DropdownContextType,
  DropdownItemProps,
  DropdownListProps,
  DropdownProps,
  DropdownToggleProps,
} from "./dropdown.types";
import { mdiArrowDownDropCircle } from "@mdi/js";
import {
  StyledDropdown,
  StyledIcon,
  StyledMenu,
  StyledMenuItem,
  StyledToggle,
} from "./dropdown.styles";
import { useMediaQuery } from "src/shared/hooks/useMediaQuery";

const DropdownContext = React.createContext<DropdownContextType>(
  {} as DropdownContextType
);

export const Dropdown = ({ children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <StyledDropdown>{children}</StyledDropdown>
    </DropdownContext.Provider>
  );
};

const Toggle = ({ name }: DropdownToggleProps) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  const smallScreenQuery = useMediaQuery("(max-width: 500px)");

  return (
    <StyledToggle
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      open={isOpen}
    >
      <span>{name}</span>
      {!smallScreenQuery.matches && (
        <StyledIcon
          path={mdiArrowDownDropCircle}
          rotate={isOpen ? 0 : -90}
        ></StyledIcon>
      )}
    </StyledToggle>
  );
};

const ToggleClick = ({ name }: DropdownToggleProps) => {
  const { setIsOpen, isOpen } = useContext(DropdownContext);

  return (
    <StyledToggle open={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      <span>{name}</span>
      <StyledIcon
        path={mdiArrowDownDropCircle}
        rotate={isOpen ? 0 : -90}
      ></StyledIcon>
    </StyledToggle>
  );
};

const List = ({ children }: DropdownListProps) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return isOpen ? (
    <StyledMenu
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
    </StyledMenu>
  ) : (
    <></>
  );
};

const Item = ({ children, onClick, selected }: DropdownItemProps) => {
  return (
    <StyledMenuItem selected={selected} onClick={onClick}>
      {children}
    </StyledMenuItem>
  );
};

Dropdown.Toggle = Toggle;
Dropdown.ToggleClick = ToggleClick;
Dropdown.List = List;
Dropdown.Item = Item;
