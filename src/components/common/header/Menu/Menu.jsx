import React, { useState, useEffect } from 'react';

export const Menu = ({ toggleMenu }) => {
  const [menuBtnId, setMenuBtnId] = useState('headMenuBtn'); // 초기 상태는 headMenuBtn

  useEffect(() => {
    console.log(`Menu Button ID updated to: ${menuBtnId}`);
  }, [menuBtnId]);

  const handleToggleMenu = () => {
    console.log('handleToggleMenu called');
    toggleMenu(); // 토글 함수 호출
    setMenuBtnId(prevId => {
      const newId = (prevId === 'headMenuBtn' ? 'allMenuBtn' : 'headMenuBtn');
      console.log(`Changing Menu Button ID from ${prevId} to ${newId}`);
      return newId;
    });
  };

  return (
    <li id={menuBtnId} onClick={handleToggleMenu}>
      <div id="dotWrap">
        <div id="dot"></div>
        <div id="dot"></div>
        <div id="dot"></div>
        <div id="dot"></div>
      </div>
    </li>
  );
};
