import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import { routes } from "./components/routes";
import NavBar from "./components/NavBar.js";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Resources from "./components/Resources";
import { Link } from "react-router-dom";
function App() {
const renderRoutes = () => {
  return routes.map((route)=> (
    <Route exact path = {route.pathname} component={route.component} />
  ))
}

const Footer = () => {
  return(
  <div className="footer" style={{textAlign: 'center', textDecoration: 'none', color: 'black'}}>
    <Link to="/resources">Resources</Link>
  </div>
  )
}



  return (
    <div style={{backgroundColor: 'slategrey', height: '1500px'}}>
      <NavBar />
        <Container>
          <Switch>
            {renderRoutes()}
            <Route exact path = "/resources" component={Resources} />
            <Route exact path = "/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
        <Footer />
    </div>
  );
}

export default App;
