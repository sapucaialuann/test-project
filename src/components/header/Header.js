import React from 'react';
// import { Link } from 'react-router-dom'
import './Header.css';
import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <header className='main-header-container'>
            <nav className='nav-header'>
                <ul className='ul-header'>
                    <li className='list-item-header'> <a className='logo-button' href='#'><img src={logo}/></a> </li>
                    <div className='pages-list-header'>
                        <li className='list-item-header'> <a href='#'>Home</a> </li>
                        <li className='list-item-header'> <a href='#'>Product</a> </li>
                        <li className='list-item-header'> <a href='#'>About</a> </li>
                        <li className='list-item-header'> <a href='#'>Contact</a> </li>
                    </div>
                    <li className='list-item-header'> <a className='login-button' href='#'>Login</a> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
