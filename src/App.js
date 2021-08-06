import React, { Component } from 'react'
import './App.css';
import PokeList from './PokeList.js'
import Dropdown from './Dropdown.js';
class App extends Component {
  state = { 
    data: [],
    loading: true,
    query: null,
    option: ''
  }
  sortOption = ['asc', 'desc']
  ascDescOrderChange = (e) => {
    this.setState({option: e.target.value})
  }

  fetchPokemon = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if (this.state.query) {
      url = url + `?pokemon=${this.state.query}`;
    }
    if (this.state.option) {
      url = url + `?sort=pokemon&direction=${this.state.option}`
    }
    let response = await fetch(url);

    let data = await response.json();
    this.setState({ data: data.results, loading: false});
  };

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  componentDidMount() {
    this.fetchPokemon();
  }

  render() { 
    const { loading } = this.state;
    return (
      <>
        <h1>Pokemon!</h1> 
        {loading && <h3> LOADING </h3>}
        {!loading && (
          <section>
            <input onChange={this.updateQuery} type='text'></input>
            <Dropdown 
              label='A-Z or Z-A'
              option={this.sortOption}
              changeEvent={this.ascDescOrderChange}
            />
            <button onClick={this.fetchPokemon}>Search!</button>
            <PokeList pokeArr={this.state.data}  />
          </section>
        )}
        
      </>
    );
  }
}
 
export default App;
