import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./store/context";

import HOC from "./components/HOC";

import "./App.css";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <HOC />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
