import { useContext } from "react";
import Context from "../../../store/context";

import { Link } from "react-router-dom";

import styles from "./HeaderNav.module.css";

import search from "../../../assets/search-line.svg";

const HeaderNav = () => {
  const ctx = useContext(Context);

  const searchOpenHandler = () => {
    ctx.setOenSearch(true);
    
  };

  return (
    <ul className={`${styles.nav} ${styles.responsive2}`}>
      <li>
        <Link>Искам да забременея</Link>
      </li>
      <li>
        <Link>Бременност</Link>
      </li>
      <li>
        <Link>Бебе</Link>
      </li>
      <li className={styles.responsive1}>
        <Link>Дете 1-2</Link>
      </li>
      <li>
        <Link className={styles.responsive1}>Дете 3+</Link>
      </li>
      <li className={styles.responsive1}>
        <Link onClick={searchOpenHandler}>
          <img src={search} className={styles.search} alt="Search" />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNav;
