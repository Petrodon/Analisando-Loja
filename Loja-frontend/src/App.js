// Imports Bibliotecas
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Imports Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/registrar" component={SignUp} />
        <Route path="/produtos" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
