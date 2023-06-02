import React, { useReducer, useState } from "react";
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const UseReducerB = () => {
  const [inputVal, setInputVal] = useState({ content: "" });
  const [state, dispatch] = useReducer(taskReducer, []);

  const addTask = (newTask) => {
    //use Date.now for a unique id
    const newTaskWithID = { content: newTask, id: Date.now() };
    console.log("newTaskWithID:", newTaskWithID);
    dispatch({ type: "ADD_TASK", payload: newTaskWithID });
  };

  const deleteTask = (taskId) => {
    console.log("delete..", taskId);
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };
  const handleChange = (e) => {
    setInputVal({ ...inputVal, content: e.target.value });
  };
  return (
    <>
      <div className="flex my-4">
        <div className="w-1/2 border border-3 border-red-500">
          <input
            id="input"
            type="text"
            className="m-4 border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your item here ..."
            value={inputVal.content}
            onChange={handleChange}
          />
          <button
            className="px-4 py-2 font-semibold text-blue-500 bg-white border border-blue-500 rounded-md shadow-md hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => {
              addTask(inputVal);
              setInputVal({ ...inputVal, content: "" });
            }}
          >
            add item
          </button>
        </div>

        <div className="w-1/2 border border-3 border-red-500">
          {state.map((value, index) => (
            <div className="flex justify-between border border-blue-500 m-1">
              <h2 className="py-2 m-1 block " key={index}>
                {value.content.content}
              </h2>
              <button
                className="px-1 py-2 m-1 font-semibold text-blue-500 bg-white border border-blue-500 rounded-md shadow-md hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => deleteTask(value.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UseReducerB;
