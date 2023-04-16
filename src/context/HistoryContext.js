import { createContext, useState } from "react";

const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([
    {
      id: 1,
      month: "July",
      day: 14,
      tracks: [
        {
          id: 1,
          type: "income", // outcome
          qty: 500,
          icon: "tel",
          info: "Salary",
          time: "02:03 PM",
        },
        {
          id: 2,
          type: "outcome", // outcome
          qty: 350,
          icon: "global",
          info: "Online store payment",
          time: "03:40 PM",
        },
        {
          id: 3,
          type: "income", // outcome
          qty: 1000,
          icon: "strelka",
          info: "Transaction",
          time: "06:00 AM",
        },
      ],
    },
  ]);


  return (
    <HistoryContext.Provider value={history}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
export { HistoryContextProvider };