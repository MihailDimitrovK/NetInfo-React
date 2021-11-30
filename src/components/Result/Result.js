import { useContext } from "react";
import Context from "../../store/context";

import styles from "./Result.module.css";

const Result = () => {
  const ctx = useContext(Context);

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.setIsFormValid(false);
    ctx.setWeightNow("");
    ctx.setWeightBefore("")
    ctx.setWeek("")
    ctx.setHeight("")
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Резултат</h3>
      <h4 className={styles.h4}>Твоето тегло е</h4>
      <p className={styles.result}>
        {ctx.weightBefore - ctx.weightNow > 0 ? "по - високо" : "по - ниско"}
      </p>
      <p>
        Препоръчително тегло за {ctx.week} седмица e
        <span>
          {ctx.minWeight} - {ctx.maxWeight}кг
        </span>
      </p>
      <input
        type="submit"
        onClick={submitHandler}
        className={styles.submit}
        value="Изчисли отново"
      />
    </div>
  );
};

export default Result;
