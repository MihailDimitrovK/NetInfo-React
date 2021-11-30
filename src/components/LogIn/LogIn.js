import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../store/context";

import styles from "./LogIn.module.css";
import close from "../../assets/close-login.svg";
import emailimg from "../../assets/envelope-line.svg";
import passimg from "../../assets/key-line.svg";
import show from "../../assets/eye-look.svg";

const LogIn = () => {
  const ctx = useContext(Context);
  const [pass, setPass] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const closeHandler = () => {
    ctx.setOpenLogIn(false);
  };

  const showPassHandler = () => {
    setPass(pass === "password" ? "text" : "password");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    email === "" ? setEmail("empty") : setEmail(email);
    password === "" ? setPassword("touched") : setPassword(password);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.close} ${styles.pointer}`}>
        <img
          src={close}
          className={styles.arrow}
          onClick={closeHandler}
          alt="Close login"
        />
      </div>

      <h2 className={styles.h2}>Влез в профила си</h2>
      <form method="POST" action="" className={styles.form}>
        <label
          className={
            email === "touched" || email === "empty"
              ? styles.labels
              : styles.notactive
          }
        >
          {!re.test(email) &&
            email !== "empty" &&
            "Моля въведете валиден имейл"}
          {email === "empty" ||
            (email !== "touched" && "Моля, въведете емайл адреса си")}
        </label>
        <div
          className={`${styles.inputrow} ${
            email === "touched" || (email === "empty" && styles.error)
          }`}
        >
          <img src={emailimg} className={styles.icons} alt="Email icon" />
          <input
            type="email"
            className={styles.input}
            onChange={(event) => {
              event.target.value === "" || !re.test(event.target.value)
                ? setEmail("touched")
                : setEmail(event.target.value);
            }}
            placeholder="E-mail *"
          />
        </div>

        <label
          className={password === "touched" ? styles.labels : styles.notactive}
        >
          Моля, въведете парола
        </label>
        <div
          className={`${styles.inputrow} ${
            password === "touched" && styles.error
          }`}
        >
          <img src={passimg} className={styles.icons} alt="Password icon" />
          <input
            type={pass}
            className={styles.input}
            onChange={(event) => {
              event.target.value === ""
                ? setPassword("touched")
                : setPassword(event.target.value);
            }}
            placeholder="Парола *"
          />

          <img
            src={show}
            onClick={showPassHandler}
            className={`${styles.icons} ${styles.pointer}`}
            alt="Show password icon"
          />
        </div>
        <input
          type="submit"
          className={styles.submit}
          onClick={submitHandler}
          value="Влез в профил"
        />
        <div className={styles.opt}>
          <div>
            <input type="checkbox" id="remember" />
            <label className={styles.label} htmlFor="remember">
              Запомни ме
            </label>
          </div>

          <Link className={styles.a}>Забравена парола</Link>
        </div>
        <div className={styles.forgot}>
          <p>Нямате регистрация?</p>
          <Link className={styles.a}>Регистрирайте се тук</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
