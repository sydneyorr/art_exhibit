import React from "react"
import About from "./About";
import Derivatives from "./Derivatives";
import Home from "./Home";
import Life from "./Life";
import Login from "./Login";
import MathIsCool from "./MathIsCool";
import NoMatch from "./NoMatch";
import Origin from "./Origin";
import Projects from "./Projects";
import Register from "./Register";
import Terminology from "./Terminology";
import Things from "./Things";

export const routes = [
  { pathname: "/", title: "Art Exhibit", component: Home},
  { pathname: "/origin", title: "Origin", component: Origin},
  { pathname: "/terminology", title: "Terminology", component: Terminology},
  { pathname: "/derivatives", title: "Derivatives", component: Derivatives},
  { pathname: "/relatestolife", title: "Relates to Life", component: Life},
  { pathname: "/cool", title: "Math is Cool", component: MathIsCool},
];

// terms, what is calc, founder of calc, origin of calc, relate to real life