import { useContext } from "react";
import Context from "../../store/context";

import { Link } from "react-router-dom";

import HeaderNav from "./HeaderNav/HeaderNav";
import SearchBar from "./SearchBar/SearchBar";


import styles from "./Header.module.css";

import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger-menu.svg";

const Header = () => {
  const ctx = useContext(Context);
  

  const openHamburgerHandler = () => {
    ctx.setOpenHamburger(true);
    
  };

  const openLoginHandler = () => {
    ctx.setOpenLogIn(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <Link to="" onClick={openHamburgerHandler}>
            <img src={hamburger} className={styles.hamburger} alt="Hamburger icon" />
          </Link>
        </div>
        <div>
          <Link to="">
            <img src={logo} className={styles.logo} alt="Logo" />
          </Link>
        </div>
        {!ctx.openSearch ? <HeaderNav /> : <SearchBar />}
        <Link to="" className={styles.span} onClick={openLoginHandler}>
          <span>Вход</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
