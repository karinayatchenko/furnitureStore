import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Homepage from "./componets/Homepage";
import Cart from "./componets/Cart";
import SellFurniture from "./componets/SellFurniture";
import ShopFurniture from "./componets/ShopFurniture";
import HIW from "./componets/HIW";

function App(params) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/furniturecollection">
            <ShopFurniture />
          </Route>
          <Route exact path="/sellfurniture">
            <SellFurniture />
          </Route>
          <Route exact path="/howitworks">
            <HIW />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      <CssBaseline />
    </>
  );
}

export default App;
