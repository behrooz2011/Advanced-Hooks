import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Increment");
      // return { count: state.count + 1 };
      return { ...state, id: "Salam" };
    case "DECREMENT":
      console.log("DECREMENT");
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerCompo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="my-10">
      <h2>UseReducer Compo</h2>
      <p className="m-4">Count: {state.count}</p>
      <p className="m-4">id: {state.id}</p>
      <button
        className="px-4 py-2 mr-4 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 mr-4 font-semibold text-blue-500 bg-white border border-blue-500 rounded-md shadow-md hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerCompo;
//Richard Feynman, the great American physicist
// who won the noble prize in Phycis has a quote along
// these lines that you learn a complex topic well
// only if you can teach it to a child.
