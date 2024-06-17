import React from 'react';

export const Menu = ({ toggleMenu, isMenuVisible }) => {
  const menuBtnId = isMenuVisible ? 'allMenuBtn' : 'headMenuBtn';

  return (
    <li id={menuBtnId} onClick={toggleMenu}>
      <div id="dotWrap">
        <div id="dot"></div>
        <div id="dot"></div>
        <div id="dot"></div>
        <div id="dot"></div>
      </div>
    </li>
  );
};
