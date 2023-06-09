import { Route, Switch } from "react-router-dom";
import UseReducerA from "./components/UseReducerA";
import About from "./components/About";
import UseReducerB from "./components/UseReducerB";
import NotFound from "./components/NotFound";
import UseContextA from "./components/UseContextA";
import Home from "./components/Home";
import UseMemoComponent from "./components/UseMemo";
import { CartProvider } from "./contexts/CartContext";
import UseCallbackComponent from "./components/UseCallbackComponent";
const Routes = () => {
  return (
    <CartProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/useReducerA" component={UseReducerA} />
        <Route path="/useReducerB" component={UseReducerB} />
        <Route path="/useContextA" component={UseContextA} />
        <Route path="/useMemo" component={UseMemoComponent} />
        <Route path="/useCallback" component={UseCallbackComponent} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> */}
      </Switch>
    </CartProvider>
  );
};
export default Routes;
