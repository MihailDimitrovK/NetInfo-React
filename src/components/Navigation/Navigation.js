import { useContext } from "react";

import Context from "../../store/context";

import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

import close from "../../assets/close-nav.svg";
import arrow from "../../assets/arrow.svg";
import fingerprint from "../../assets/finger-print.svg";
import lock from "../../assets/shield-lock-line.svg";
import notification from "../../assets/notification-bell.svg";

const Navigation = () => {
  const ctx = useContext(Context);

  const closeHandler = () => {
    ctx.setOpenLogIn(true);
    ctx.setOpenHamburger(false);
  };

  const closeNavHandler = () => {
    ctx.setOpenHamburger(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.login}>
        <Link to="" className={styles.span} onClick={closeHandler}>
          <span>Вход</span>
        </Link>
        <p className={styles.para}>
          Получавай персонализирани препоръки и съвети!
        </p>
        <Link onClick={closeNavHandler}>
          <img src={close} className={styles.close} alt="Search" />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link>Искам да забременея</Link>
          <Link>
            <img src={arrow} className={styles.arrow} alt="Open menu" />
          </Link>
        </li>
        <li>
          <Link>Бременност</Link>
          <Link>
            <img src={arrow} className={styles.arrow} alt="Open menu" />
          </Link>
        </li>
        <li>
          <Link>Бебе</Link>
          <Link>
            <img src={arrow} className={styles.arrow} alt="Open menu" />
          </Link>
        </li>
        <li>
          <Link>Дете 1-2</Link>
          <Link>
            <img src={arrow} className={styles.arrow} alt="Open menu" />
          </Link>
        </li>
        <li>
          <Link>Дете 3+</Link>
          <Link>
            <img src={arrow} className={styles.arrow} alt="Open menu" />
          </Link>
        </li>
        <li>
          <Link>Галерия</Link>
        </li>
        <li>
          <Link>Оферти</Link>
        </li>
        <li>
          <Link>Любопитно</Link>
        </li>
        <li>
          <Link>Стволови клетки</Link>
        </li>
        <li>
          <Link>Списъци</Link>
        </li>
        <li>
          <Link>Видео</Link>
        </li>
        <li>
          <Link>Инструменти</Link>
          <Link>
            <img src={arrow} className={styles.arrow} alt="Open menu" />
          </Link>
        </li>
        <li>
          <ul className={styles.privacy}>
            <li>
              <Link>
                <img
                  src={fingerprint}
                  className={styles.icons}
                  alt="Open menu"
                />
              </Link>
              <Link>Поверителност</Link>
            </li>
            <li>
              <Link>
                <img src={lock} className={styles.icons} alt="Open menu" />
              </Link>
              <Link>Политика лд</Link>
            </li>
            <li>
              <Link>
                <img
                  src={notification}
                  className={styles.icons}
                  alt="Open menu"
                />
              </Link>
              <Link>Известия</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
