import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Nav";
import Design from "./Design";
import Marketing from "./Marketing";
import Development from "./Development";
import Home from "./Home";



function App() {
  return (
   <Router>
    <div className="d-flex">
        <Nav/>

        <div>
        <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
             </Switch>
             <Switch>
               <Route  path="/design">
                  <Design />
               </Route>
             </Switch>
             <Switch>
               <Route  path="/development">
                  <Development />
               </Route>
             </Switch>
             <Switch>
               <Route  path="/marketing">
                  <Marketing />
               </Route>
             </Switch>
        </div>

      </div>
    </Router>
  
   
   
  );
}

export default App;
