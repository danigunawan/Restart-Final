import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from "./components/home"
import Brands from "./components/brands"
import Logout from "./components/logout"
import Error from "./components/error"
import Modal from "./components/modal"
import Navigation from "./components/navigation"



class App extends Component {



  render() {
    return (

      <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/brands" component={Brands}/>
              <Route path="/logout" component={Logout}/>
              <Route component={Error}/>
            </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
