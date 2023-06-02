// import logo from './logo.svg';

import { Link } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className=" bg-green-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <h1 className="bg-green-200 m-10">Advanced Hooks in React.js:</h1> */}
      <nav className="bg-amber-100 flex space-x-4">
        <ul className="flex space-x-4">
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useReducerA">useReducer 1</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useReducerB">useReducer 2</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useContextA">useContext</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useMemo">useMemo</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useContextA">useCallback</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useContextA">useRef</Link>
          </li>
          {/* <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
      <Routes />
    </div>
  );
}

export default App;
