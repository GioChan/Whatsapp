import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  font-size: 0.9em;
  background-color: white;
  position: absolute;
  box-shadow: 0px 3px 3px grey;
  transform: ${(props) => (props.visible ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.3s ease;
  transform-origin: top right;
  height: 30%;
  width: 50%;
  z-index: 999;
  top: 10px;
  right: 10px;
  padding: 5px;
  p {
    padding: 4px;
  }

  button {
    background: none;
    border: 0;
    padding: 2px;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    user-select: none;
    border: 1px solid grey;
    border-radius: 2px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Dropdown = ({ dropdownIsVisible, toggleDropdown }) => {
  return (
    <StyledDropdown visible={dropdownIsVisible}>
      <button onClick={toggleDropdown}>X</button>
      <p>Whatsapp Web</p>
      <p>Settings</p>
    </StyledDropdown>
  );
};

export default Dropdown;
