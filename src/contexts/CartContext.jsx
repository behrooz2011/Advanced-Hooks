import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [itemsPurchased, setItemsPurchased] = useState([]);
  const totalPrice = itemsPurchased.reduce((sum, item) => {
    console.log("reducer activated");
    return sum + item.price;
  }, 0);
  console.log({ totalPrice });
  const contextValue = {
    itemsPurchased,
    setItemsPurchased,
    totalPrice,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
