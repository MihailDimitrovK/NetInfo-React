import { useContext } from "react";
import Context from "../../store/context";

import Aside from "../Aside/Aside";
import Calculator from "../Calculator/Calculator";
import Result from "../Result/Result";

import styles from "./MainContent.module.css";

const MainContent = () => {
  const ctx = useContext(Context);

  return (
    <div>
      <h1 className={styles.h1}>Тегло при бременност</h1>
      <div className={styles.main}>
        <section className={styles.wrapper}>
          <div className={styles.container}>
            {!ctx.isFormValid ? <Calculator /> : <Result />}
          </div>
          <p className={styles.paragraph}>
            Използвайте нашия калкулатор за следене на теглото по време на
            бременност, за да разберете с колко средно се очаква да наддавате
            през 9-те месеца от бремеността. Повечето жени наддават между 8 кг.
            и 20кг. по време на бременноста си, ако носят само едно бебе. Средно
            една бъдеща майка се нуждае от допълнителни 300kJ в диетата си на
            ден за първия триместър, 600kJ през втория триместър и 900kJ през
            последния триместър. По време на бременност не се препоръчват диети
            и режими, а по- скоро консумирането на добре балансирана храна.
            Хранителният ви режим трябва задължително да бъде консултиран с
            лекар.
          </p>
        </section>
        <Aside />
      </div>
    </div>
  );
};

export default MainContent;
