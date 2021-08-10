import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() { 
        return ( 
            <header>
                <h1>Pokedex</h1>
                <div className='links'>
                    <NavLink exact to='home'>
                        Home
                    </NavLink>
                    <NavLink to='/pokemon'>Pokemon List</NavLink>
                </div>
            </header>
        );
    }
}
 
export default Header;