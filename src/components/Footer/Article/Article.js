import { Link } from "react-router-dom";

import styles from "./Article.module.css";

const Article = (props) => {
  return (
    <article className={styles.article}>
      <Link>
        <img className={styles.img} src={props.img} alt="Article" />
      </Link>
      <div className={styles.headers}>
        <Link>
          <div>{props.header}</div>
        </Link>
        <Link>
          <p>{props.content}</p>
        </Link>
      </div>
    </article>
  );
};

export default Article;
