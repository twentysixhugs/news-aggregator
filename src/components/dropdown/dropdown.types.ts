import React from "react";

export type DropdownProps = {
  children: React.ReactNode;
};

export type DropdownItemProps = {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
  selected?: boolean;
};

export type DropdownListProps = {
  children?: React.ReactNode;
};

export type DropdownToggleProps = {
  name: string;
};

export type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
