import React, { useState } from "react";

const Context = React.createContext();

export const ContextProvider = (props) => {
  const [weightBefore, setWeightBefore] = useState("");
  const [weightNow, setWeightNow] = useState("");
  const [height, setHeight] = useState("");
  const [week, setWeek] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSearch, setOenSearch] = useState(false);

  const contextValues = {
    weightBefore,
    setWeightBefore,
    weightNow,
    setWeightNow,
    height,
    setHeight,
    week,
    setWeek,
    maxWeight,
    setMaxWeight,
    minWeight,
    setMinWeight,
    isFormValid,
    setIsFormValid,
    openHamburger,
    setOpenHamburger,
    openLogIn,
    setOpenLogIn,
    openSearch,
    setOenSearch,
  };

  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};

export default Context;
