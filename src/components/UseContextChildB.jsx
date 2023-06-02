import React, { useContext } from "react";
import { MyContext } from "../contexts/ColorContext";

export default function UseContextChildB() {
  const { price } = useContext(MyContext);
  console.log({ price });

  return (
    <div className="w-1/2 border border-3 border-red-500">
      <h1 className="m-2 p-2">child B, price: {price} </h1>
    </div>
  );
}
