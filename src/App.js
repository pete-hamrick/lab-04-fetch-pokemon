import React, { Component } from 'react'
import './App.css';
import PokeList from './PokeList.js'

class App extends Component {
  state = { 
    data: [],
    loading: true,
    query: null
  }

  fetchData = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if (this.state.query) {
      url = url + `?search=${this.state.query}`;
    }
    let response = await fetch(url);

    let data = await response.json();

    this.setState({ data, loading: false});
  };

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  componentDidMount() {
    this.fetchData();
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
            <button onClick={this.fetchData}>Search!</button>
            <PokeList pokeArr={this.state.data.results}  />
          </section>
        )}
        
      </>
    );
  }
}
 
export default App;
