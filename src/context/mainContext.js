import { createContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [state, setState] = useState({
    accounts: [
      {
        id: 1,
        name: "Visa",
        balance: 1000,
        balance: 340000000.12,
        history: [
          {
            id: 1,
            month: "July",
            day: 14,
            tracks: [
              {
                id: 1,
                type: "income", //* icnome / outcome
                quantity: 500,
                icon: "🐊",
                info: "Transaction"
              }
            ]
          }
        ]
      }
    ]
  });

  return (
    <MainContext.Provider value={{ ...state }}>{children}</MainContext.Provider>
  );
};

export default MainContext;

export { MainContextProvider };
