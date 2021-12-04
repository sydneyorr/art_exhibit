import React, { useContext } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { routes } from "./routes";
import 'semantic-ui-css/semantic.min.css'

const NavBar = (props) => {

    const renderRoutes = () => {
      const { location } = props;
      return routes.map(({pathname, title}) => {
        return (
          <Link to={pathname}>
            <Menu.Item active={location.pathname == pathname} style={{color: 'fireBrick'}}>{title}</Menu.Item>
          </Link>
        )
      })
    };
  

    return (
    <Menu style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'aquamarine'}}>
    {renderRoutes()}
    </Menu>
    )
}



export default withRouter(NavBar);