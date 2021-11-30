import { Fragment } from "react";
import { useContext } from "react";

import Context from "../store/context";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Overlay from "./Overlay/Overlay";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import MainContent from "./MainContent/MainContent";
import LogIn from "./LogIn/LogIn";

const HOC = () => {
  const ctx = useContext(Context);

  return (
    <Fragment>
      <Header />
      {ctx.openHamburger && (
        <Overlay>
          <Navigation />
        </Overlay>
      )}

      {ctx.openLogIn && (
        <Overlay>
          <LogIn />
        </Overlay>
      )}

      <MainContent />

      <Footer />

      <Contact />
    </Fragment>
  );
};

export default HOC;
