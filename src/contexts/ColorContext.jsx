// Create a context
import React, { createContext, useState } from "react";
export const MyContext = createContext(); // safety rope

// Create a provider component
export const ColorContextProvider = ({ children }) => {
  const textVal = "Hello, World!"; // Some value to be provided
  const sum = (x) => x + x;
  const [price, setPrice] = useState(100);

  const contextValue = {
    textVal,
    sum,
    price,
    setPrice,
  };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
