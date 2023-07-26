import React, { useState, useRef, useContext } from 'react'
import { AppContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { CSSTransition } from 'react-transition-group';

//css 
import '../../css/landing.css'
import '../../css/uniform-styles.css'
import '../../App.css'

const Navbar = () => {

    const { toggleBurger, setToggleBurger } = useContext(AppContext)

    const burgerRef = useRef(null);

    const handleBurgerClick = () => {
        setToggleBurger(!toggleBurger);
    };

    return (
        <div className='header'>
            <div className='navbar-wrapper'>
                <div className='logo-wrapper'>
                    <p>INSERT LOGO HERE</p>
                </div>

                <div className='menu-wrapper'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Login</li>
                    </ul>

                </div>

                <div className='burger-wrapper'>
                    <FontAwesomeIcon icon={faBars} onClick={handleBurgerClick} />

                    <CSSTransition
                        in={toggleBurger}
                        timeout={300}
                        classNames='burger-slide'
                        unmountOnExit
                        nodeRef={burgerRef}
                    >


                        <div className='overlay'>
                            <div ref={burgerRef} className='side-wrapper'>
                                <FontAwesomeIcon icon={faXmark} onClick={handleBurgerClick} />
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Shop</li>
                                    <li>Login</li>
                                </ul>

                            </div>
                        </div>

                    </CSSTransition>
                </div >
            </div>
        </div >
    )
}

export default Navbar