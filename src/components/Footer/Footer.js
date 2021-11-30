
import { Link } from "react-router-dom";
import Article from "./Article/Article";

import styles from "./Footer.module.css";
import arrow from "../../assets/arrow.svg";
import img3 from "../../assets/3.png";
import img2 from "../../assets/2.png";
import img4 from "../../assets/4.png";
import img1 from "../../assets/1.png";

const Footer = () => {


  return (
    <footer className={styles.footer}>
      <Link className={styles.arrowcontainer}>
        <img src={arrow} className={styles.arrow} alt="Open icon" />
      </Link>
      <h2 className={styles.h2}>Ново</h2>
      <div className={styles.section}>
        <Article
          img={img3}
          header="Поведение"
          content="Как да поставяме ясни граници на 5-годишното дете"
        />
        <Article
          img={img2}
          header="Бебе"
          content="Идеални клонинги ли са еднояйчните близнаци?"
        />
        <Article
          img={img4}
          header="Любопитно"
          content="Как да се погрижиш за красотата си след бременността"
        />
        <Article
          img={img1}
          header="Любопитно"
          content='Страхът от водата: ето как да "излекувате" детето си'
        />
      </div>
    </footer>
  );
};

export default Footer;
