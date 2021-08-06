import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    state = {  }
    render() { 
        return (
            <article className='pokemon'>
                {this.props.pokeArr.map((poke) => {
                return <PokeItem key={poke.pokemon} pokemon={poke}/>
                })}
            </article>
        );
    }
}
 
export default PokeList;