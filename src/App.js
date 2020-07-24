import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";



function App() {
  return(
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
      <Route path="/About" component={About} />
      <Route path="/Movie-detail" component={Detail}/>
    </HashRouter>
  )
}

export default App;
