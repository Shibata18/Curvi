import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import ErrorPage from './pages/Error';
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import CadastroPage from "./pages/Cadastro";
import Profile from "./pages/Perfil";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path='/cadastrar' component={CadastroPage} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/perfil' component={Profile}/> 
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
