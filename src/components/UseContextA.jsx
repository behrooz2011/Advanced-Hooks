//parent
import React from "react";
import { ColorContextProvider } from "../contexts/ColorContext";
import UseContextChildA from "./useContextChildA";
import UseContextChildB from "./UseContextChildB";

const UseContextA = () => {
  return (
    <ColorContextProvider>
      <div className="flex m-4">
        <UseContextChildA />
        <UseContextChildB />
      </div>
    </ColorContextProvider>
  );
};

export default UseContextA;
