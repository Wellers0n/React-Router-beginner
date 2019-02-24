import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import Home from './component/home';
import Sobre from './component/sobre'
import Contato from './component/contato'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/sobre" component={Sobre}/>
          <Route path="/contato" component={Contato}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
