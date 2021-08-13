import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() { 
        return ( 
            <header>
                <h1>Pokedex</h1>
                <div className='links'>
                    <NavLink activeClassName='selected' exact to='/'>
                        Home
                    </NavLink>
                    <NavLink activeClassName='selected' to='/pokemon'>Pokemon List</NavLink>
                </div>
            </header>
        );
    }
}
 
export default Header;