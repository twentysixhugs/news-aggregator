import Icon from "@mdi/react";
import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;
`;

type StyledToggleProps = {
  open?: boolean;
};

export const StyledToggle = styled.button.attrs<StyledToggleProps>((props) => ({
  open: props.open,
}))<StyledToggleProps>`
  width: 210px;
  height: 2.8rem;
  padding: 1.2rem;

  @media (max-width: 500px) {
    width: 130px;
    font-size: 1rem;
    justify-content: center;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.3rem;

  background: #ff8d64;
  border-radius: ${(props) => (props.open ? "8px 8px 0 0" : "8px")};
`;
export const StyledIcon = styled(Icon)`
  width: 1.4rem;
  height: 1.4rem;
  justify-self: flex-end;

  transition: transform 0.2s;
`;

export const StyledMenu = styled.ul`
  position: absolute;
  z-index: 1;

  background: #ff8d64;
  border-radius: 0 0 8px 8px;

  transform: translateY(10px);

  @keyframes dropdownAppear {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(-1px);
    }
  }
  animation: dropdownAppear 0.25s ease both;
`;

type StyledMenuItemProps = {
  selected?: boolean;
};

export const StyledMenuItem = styled.li.attrs<StyledMenuItemProps>((props) => ({
  selected: props.selected,
}))<StyledMenuItemProps>`
  list-style: none;
  width: 210px;
  height: 2.8rem;
  padding: 0.4rem;

  @media (max-width: 500px) {
    width: 130px;
    font-size: 1rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;

  cursor: pointer;

  background: ${({ selected }) => (selected ? "#ed835c" : "#ff8d64")};

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  &:hover {
    background: #d67551;
  }
`;
