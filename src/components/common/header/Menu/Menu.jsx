export const Menu = ({ toggleMenu }) => {
  return (
    <li className="headMenuBtn" onClick={toggleMenu}>
      <div className="dotWrap">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </li>
  );
};
