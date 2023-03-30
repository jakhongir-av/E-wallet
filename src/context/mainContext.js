import { createContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [state, setState] = useState({
    accounts: [
      {
        id: 1,
        name: "Visa",
        balance: 340000000.12,
        history: [
          {
            id: 1,
            month: "July",
            day: 14,
            tracks: [
              {
                id: 1,
                type: "income", // outcome
                qty: 500,
                icon: "qwerty",
                info: "Salary",
              },
            ],
          },
        ],
      },
    ],
  });
  return <MainContext.Provider value={{...state}}>{children}</MainContext.Provider>;
};

export default MainContext;

export { MainContextProvider };
