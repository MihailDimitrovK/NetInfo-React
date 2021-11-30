import { useState, useContext } from "react";
import Context from "../../store/context";

import styles from "./Calculator.module.css";

import weight from "../../assets/body-weight-scales.svg";
import heighticon from "../../assets/measure-height.svg";

const Calculator = () => {
  const ctx = useContext(Context);

  const [twins, setTweens] = useState("");

  const setWeekValue = (event) => {
    ctx.setWeek(event.target.value);
  };

  const getMaxWeight = (height, week, twins) => {
    return ctx.height - 105 + ((ctx.week * 20) / 40) * (twins ? 1.5 : 1);
  };

  const getMinWeight = (height, week, twins) => {
    return height - 105 + ((week * 8) / 40) * (twins ? 1.5 : 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.weightBefore === ""
      ? ctx.setWeightBefore("touched")
      : ctx.setWeightBefore(ctx.weightBefore);
    ctx.weightNow === ""
      ? ctx.setWeightNow("touched")
      : ctx.setWeightNow(ctx.weightNow);
    ctx.height === "" ? ctx.setHeight("touched") : ctx.setHeight(ctx.height);
    ctx.week === "" ? ctx.setWeek("touched") : ctx.setWeek(ctx.week);

    !isNaN(ctx.weightBefore) &&
    !isNaN(ctx.weightNow) &&
    !isNaN(ctx.height) &&
    ctx.week !== ""
      ? ctx.setIsFormValid(true)
      : ctx.setIsFormValid(false);

    ctx.setMinWeight(getMinWeight(ctx.height, ctx.week, twins));
    ctx.setMaxWeight(getMaxWeight(ctx.height, ctx.week, twins));
  };

  const checkBoxHandler = (e) => {
    setTweens(e.target.checked);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>
        Какво трябва да бъде теглото ми по време на бременност?
      </h4>
      <form method="POST" action="" className={styles.form}>
        <label
          className={isNaN(ctx.weightBefore) ? styles.label : styles.notactive}
        >
          {!isNaN(ctx.weightBefore) || ctx.weightBefore === "touched"
            ? "Моля, въведете число"
            : "Моля, въведете валидно число"}
        </label>
        <div className={styles.inputrow}>
          <div
            className={`${styles.input} ${
              isNaN(ctx.weightBefore) && styles.error
            }`}
          >
            <img src={weight} className={styles.weight} alt="Weight icon" />

            <input
              type="text"
              onChange={(event) =>
                event.target.value === ""
                  ? ctx.setWeightBefore("touched")
                  : ctx.setWeightBefore(event.target.value)
              }
              className={styles.text}
              placeholder="Тегло преди забременяване"
            />
          </div>
          <span className={styles.span}>кг</span>
        </div>
        <label
          className={isNaN(ctx.weightNow) ? styles.label : styles.notactive}
        >
          {!isNaN(ctx.weightNow) || ctx.weightNow === "touched"
            ? "Моля, въведете число"
            : "Моля, въведете валидно число"}
        </label>
        <div className={styles.inputrow}>
          <div
            className={`${styles.input} ${
              isNaN(ctx.weightNow) && styles.error
            }`}
          >
            <img src={weight} className={styles.weight} alt="Weight icon" />
            <input
              type="text"
              onChange={(event) =>
                event.target.value === ""
                  ? ctx.setWeightNow("touched")
                  : ctx.setWeightNow(event.target.value)
              }
              className={styles.text}
              placeholder="Тегло в момента"
            />
          </div>
          <span className={styles.span}>кг</span>
        </div>
        <label className={isNaN(ctx.height) ? styles.label : styles.notactive}>
          {!isNaN(ctx.height) || ctx.height === "touched"
            ? "Моля, въведете число"
            : "Моля, въведете валидно число"}
        </label>
        <div className={styles.inputrow}>
          <div
            className={`${styles.input} ${isNaN(ctx.height) && styles.error}`}
          >
            <img src={heighticon} className={styles.weight} alt="Height icon" />
            <input
              type="text"
              onChange={(event) =>
                event.target.value === ""
                  ? ctx.setHeight("touched")
                  : ctx.setHeight(event.target.value)
              }
              className={styles.text}
              placeholder="Височина"
            />
          </div>
          <span className={styles.span}>см</span>
        </div>

        <h4 className={styles.week}>В коя седмица си бременна?</h4>
        <label className={isNaN(ctx.week) ? styles.label : styles.notactive}>
          Моля, изберете седмица
        </label>
        <select
          className={`${styles.select} ${isNaN(ctx.week) && styles.error}`}
          onChange={setWeekValue}
        >
          <option value="">Избери седмица</option>
          <option value="1">Седмица 1</option>
          <option value="2">Седмица 2</option>
          <option value="3">Седмица 3</option>
          <option value="4">Седмица 4</option>
          <option value="5">Седмица 5</option>
          <option value="6">Седмица 6</option>
          <option value="7">Седмица 7</option>
          <option value="8">Седмица 8</option>
          <option value="9">Седмица 9</option>
          <option value="10">Седмица 10</option>
          <option value="11">Седмица 11</option>
          <option value="12">Седмица 12</option>
          <option value="13">Седмица 13</option>
          <option value="14">Седмица 14</option>
          <option value="15">Седмица 15</option>
          <option value="16">Седмица 16</option>
          <option value="17">Седмица 17</option>
          <option value="18">Седмица 18</option>
          <option value="19">Седмица 19</option>
          <option value="20">Седмица 20</option>
          <option value="21">Седмица 21</option>
          <option value="22">Седмица 22</option>
          <option value="23">Седмица 23</option>
          <option value="24">Седмица 24</option>
          <option value="25">Седмица 25</option>
          <option value="26">Седмица 26</option>
          <option value="27">Седмица 27</option>
          <option value="28">Седмица 28</option>
          <option value="29">Седмица 29</option>
          <option value="30">Седмица 30</option>
          <option value="31">Седмица 31</option>
          <option value="32">Седмица 32</option>
          <option value="33">Седмица 33</option>
          <option value="34">Седмица 34</option>
          <option value="35">Седмица 35</option>
          <option value="36">Седмица 36</option>
          <option value="37">Седмица 37</option>
          <option value="38">Седмица 38</option>
          <option value="39">Седмица 39</option>
          <option value="40">Седмица 40</option>
        </select>
        <div className={styles.expectation}>
          <input
            type="checkbox"
            id="expectation"
            onChange={(e) => checkBoxHandler(e)}
          />
          <label htmlFor="expectation">Очаквам близнаци</label>
        </div>
        <input
          type="submit"
          onClick={submitHandler}
          className={styles.submit}
          value="Изчисли"
        />
      </form>
    </div>
  );
};

export default Calculator;
