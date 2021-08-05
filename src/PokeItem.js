import React, { Component } from 'react';

class PokeItem extends Component {
    state = {  }
    render() { 
        console.log(this.props) 
        return (
            <div className='poke'>
                <h3>{this.props.pokemon.pokemon}</h3>
                <img
                    alt={this.props.pokemon.pokemon}
                    width='200'
                    src={this.props.pokemon.url_image}
                />
            </div>
        );
    }
}
 
export default PokeItem;