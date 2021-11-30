import { useContext } from "react";
import Context from "../../../store/context";

import { Link } from "react-router-dom";
import close from "../../../assets/close.svg";
import search from "../../../assets/search-line.svg";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const ctx = useContext(Context);

  const searchOpenHandler = () => {
    ctx.setOenSearch(false);
  };

  return (
    <form action="" method="get" className={styles.form}>
      <Link onClick={searchOpenHandler}>
        <img src={close} className={styles.close} alt="Search icon" />
      </Link>
      <input type="text" className={styles.input} placeholder="Какво търсиш" />
      <Link>
        <img src={search} alt="Submit icon" className={styles.search} />
      </Link>
    </form>
  );
};

export default SearchBar;
