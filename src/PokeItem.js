import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PokeItem extends Component {
    state = {  }
    render() { 
        return (
            <div className='poke'>
                <Link to={`/pokemon/${this.props.pokemon._id}`}>
                    <h3>{this.props.pokemon.pokemon}</h3>
                    <img
                        alt={this.props.pokemon.pokemon}
                        width='200'
                        src={this.props.pokemon.url_image}
                    />                
                </Link>
            </div>
        );
    }
}
 
export default PokeItem;