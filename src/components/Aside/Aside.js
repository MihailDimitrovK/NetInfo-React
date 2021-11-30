import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Aside.module.css";

import arrow from "../../assets/arrow - open.svg";
import link from "../../assets/open-external-link.svg";

const Horoscope = () => {
  const [data, setData] = useState();
  const [shown, setShown] = useState(false);
  const [current, setCurrent] = useState(11007);

  const shownHandler = () => {
    setShown((shown) => !shown);
  };

  const fetcHandler = (id) => () => {
    setCurrent(id);
    setShown(false);
  };

  useEffect(() => {
    axios({
      method: "get",
      headers: { "Content-Type": "application/json" },
      url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${current}`,
    })
      .then((response) => {
        setData(response.data["drinks"][0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [current]);

  return (
    <aside className={styles.aside}>
      <div className={styles.header}>
        <h2>Коктейли</h2>
        <Link>https://www.thecocktaildb.com/api.php</Link>
      </div>
      <div className={styles.content}>
        <div className={styles.nav} onClick={shownHandler}>
          <div>
            <img
              src={data && data["strDrinkThumb"]}
              className={styles.pic}
              alt="Picure"
            />
          </div>
          <div className={styles.sign}>
            <div className={styles.head}>{data && data["strDrink"]}</div>
            <div className={styles.data}>{data && data["strAlcoholic"]}</div>
          </div>
          <div>
            <span className={styles.span}>
              <img src={arrow} className={styles.arrow} alt="Show menu" />
            </span>
          </div>
        </div>
        {shown && (
          <div className={styles.hiden}>
            <ul className={styles.list}>
              <li onClick={fetcHandler(11007)}>Margarita</li>
              <li onClick={fetcHandler(12782)}>Thai Coffee</li>
              <li onClick={fetcHandler(12362)}>Tequila Fizz</li>
              <li onClick={fetcHandler(17210)}>Bramble</li>
              <li onClick={fetcHandler(17176)}>Ipamena</li>
              <li onClick={fetcHandler(12954)}>Holloween Punch</li>
              <li onClick={fetcHandler(15194)}>Amaretto Shake</li>
              <li onClick={fetcHandler(11119)}>Blue Mountain</li>
              <li onClick={fetcHandler(11416)}>Gin Smash</li>
              <li onClick={fetcHandler(12402)}>Tom Collins</li>
              <li onClick={fetcHandler(11666)}>Lone Tree Cooler</li>
              <li onClick={fetcHandler(11021)}>Allegheny</li>
            </ul>
          </div>
        )}
        <p className={styles.daily}>Описание</p>
        <p className={styles.para}>{data && data["strInstructions"]}</p>
        <div className={styles.monthly}>
          <Link>
            <img src={link} className={styles.link} alt="Link" />
            Още коктеийли
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Horoscope;
