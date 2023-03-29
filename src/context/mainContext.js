import { createContext } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  return <MainContext.Provider value={'smth'}>{children}</MainContext.Provider>;
};

export default MainContext;

export { MainContextProvider };
