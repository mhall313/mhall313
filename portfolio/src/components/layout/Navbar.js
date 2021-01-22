import React from 'react';

const Navbar = ({proj}) => {
    
    return (

        proj && (    
            <nav className='navbar'>
                <span className="navbar-brand mb-0 h1">Portfolio</span>
                <ul className="nav justify-content-end">
                    <li className="fas fa-home highlight-me"></li>
                    <li className="fab fa-github highlight-me"></li>
                    <li className="fab fa-linkedin highlight-me"></li>
                </ul>
            </nav>
        )
    )
    
}


export default Navbar
