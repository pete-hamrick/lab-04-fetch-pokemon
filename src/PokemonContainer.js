import React, { Component } from 'react';
import PokeList from './PokeList.js';
import './PokemonContainer.css'
class PokemonContainer extends Component {
    state = { 
        data: [],
        loading: true,
        query: null,
        sortOption: 'asc',
        page: 1,
        lastPage: 1
    }
    componentDidMount() {
        this.fetchPokemon();
    }
    
    fetchPokemon = async () => {
        if (!this.state.loading) {
            this.setState({ loading: true });
        }

        let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
        let searchParams = new URLSearchParams();
        searchParams.set('page', this.state.page);
        if (this.state.query) {
            searchParams.set('pokemon', this.state.query);
        }
        if (this.state.sortOption) {
            searchParams.set('sort', 'pokemon');
            searchParams.set('direction', this.state.sortOption);
        }
        url = url + `?${searchParams.toString()}`;

        let response = await fetch(url);

        let data = await response.json();

        const lastPage = Math.ceil(data.count / data.perPage);

        this.setState({ data: data.results, loading: false, lastPage});
    };

    updateSort = (e) => {
        this.setState({sortOption: e.target.value})
    }


    updateQuery = (e) => {
        this.setState({ query: e.target.value });
    };

    nextPage = async() => {
        await this.setState({page: this.state.page + 1})
        this.fetchPokemon();
    };
    
    prevPage = async() => {
        await this.setState({page: this.state.page - 1})
        this.fetchPokemon();
    };
    goToLast = async () => {
        await this.setState({ page: this.state.lastPage});
        this.fetchPokemon();
    }

    searchPokemon = async () => {
        await this.setState({ page: 1 });
        this.fetchPokemon();
    }

    render() { 
        return (
        <>
            <h1>Pokemon!</h1> 
            <div className='search-controls'>
                <select defaultValue={this.state.sortOption} onChange={this.updateSort}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                <input onChange={this.updateQuery} type='text'></input>
                <button onClick={this.searchPokemon}>Search!</button>
            </div>
            <div className='page-controls'>
                {this.state.page > 1 && (
                    <button onClick={this.prevPage}>Previous</button>
                )}
                {this.state.page < this.state.lastPage && (
                    <>
                        <button onClick={this.nextPage}>Next</button>
                        <button onClick={this.goToLast}>Last Page</button>
                    </>
                )}
            </div>
            <p>
                Current Page: {this.state.page}
            </p>
            <p>
                Last Page: {this.state.lastPage}
            </p>
            {this.state.loading && <div class="lds-hourglass"></div>}
            {!this.state.loading && (
            <section>
                <PokeList pokeArr={this.state.data}  />
            </section>
            )}
            
        </>
        );
  }
}
 
export default PokemonContainer;