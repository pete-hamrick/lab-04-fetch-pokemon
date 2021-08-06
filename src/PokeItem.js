import React, { Component } from 'react';

class PokeItem extends Component {
    state = {  }
    render() { 
        return (
            <div className='poke'>
                <h3>{this.props.pokemon.pokemon}</h3>
                <img
                    alt={this.props.pokemon.pokemon}
                    width='200'
                    src={this.props.pokemon.url_image}
                />
                <p>
                  Type 1: {this.props.pokemon.egg_group_1}
                </p>
                <p>
                  Type 2: {this.props.pokemon.egg_group_2}  
                </p>
            </div>
        );
    }
}
 
export default PokeItem;