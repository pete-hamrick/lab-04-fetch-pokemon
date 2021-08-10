import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import PokeDetail from './PokeDetail.js';
import PokemonContainer from './PokemonContainer.js';
import Home from './Home.js';
class App extends Component {
    render() { 
        return ( 
            <section className='app'>
              <BrowserRouter>
                  <Header />
                  <Switch>
                      <Route path='/pokemon/:id' component={PokeDetail} />
                      <Route path='/pokemon' component={PokemonContainer} />
                      <Route pat='/' component={Home} />
                  </Switch>
              </BrowserRouter>
            </section>   
        );
    }
}
 
export default App;
