import { createContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [state, setState] = useState({
    accounts: [
      {
        id: 1,
        name: "Visa",
<<<<<<< HEAD
        balance: 1000,
=======
        balance: 340000000.12,
>>>>>>> f9f7d7a07fb3b8354837f6c6e47e131d3e086043
        history: [
          {
            id: 1,
            month: "July",
            day: 14,
            tracks: [
              {
                id: 1,
<<<<<<< HEAD
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
=======
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
>>>>>>> f9f7d7a07fb3b8354837f6c6e47e131d3e086043
};

export default MainContext;

export { MainContextProvider };
