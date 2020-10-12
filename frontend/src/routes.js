import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import ErrorPage from './pages/Error';
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import CadastroPage from "./pages/Cadastro";
import Profile from "./pages/Perfil";
import Cursos from "./pages/Cursos";
import SocialMedia from "./pages/SocialMedia";
import Experiencia from "./pages/Experiencia";
import Objetivo from "./pages/Objetivos";
import Resume from './pages/Resume'
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
      <Route path='/cursos' component={Cursos} />
      <Route path='/socialmedia' component={SocialMedia} />
      <Route path='/experiencia' component={Experiencia} />
      <Route path='/objetivo' component={Objetivo} />
      <Route path='/resume' component={Resume} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/perfil' component={Profile}/> 
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
