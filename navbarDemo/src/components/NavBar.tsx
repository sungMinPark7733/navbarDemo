import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav>
      <input type="checkbox" id="check" checked={menuVisible} />
      <span className="icon" onClick={toggleMenu}>
        &#9776;
      </span>
      <label className="logo">myLogo</label>
      <ul className={menuVisible ? "menu-visible" : ""}>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <a href="#">FEEDBACK</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
