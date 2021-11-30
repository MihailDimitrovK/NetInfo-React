import { Link } from "react-router-dom";

import styles from "./Contact.module.css"

import contact from "../../assets/pencil.svg"

const Contact = () => {
  return (
    <Link className={styles.contact}>
      <img src={contact} className={styles.pencil} alt="Contact icon" />
      <span className={styles.contactlabel}>Пишете ни</span>
    </Link>
  );
};

export default Contact