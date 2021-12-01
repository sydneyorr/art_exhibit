import React from "react"
import About from "./About";
import Home from "./Home";
import Life from "./Life";
import Login from "./Login";
import NoMatch from "./NoMatch";
import Projects from "./Projects";
import Register from "./Register";
import Terminology from "./Terminology";
import Things from "./Things";

export const routes = [
  { pathname: "/", title: "Home", component: Home},
  { pathname: "/terminology", title: "Terminology & Formulas", component: Terminology},
  { pathname: "/relatestolife", title: "Relates to life", component: Life},
  { pathname: "/about", title: "About", component: About},
];

// terms, what is calc, founder of calc, origin of calc, relate to real life