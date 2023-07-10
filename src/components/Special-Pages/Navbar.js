import React, { useState, useRef, useContext } from 'react'
import { AppContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { CSSTransition } from 'react-transition-group';

//css 
import '../../css/landing.css'
import '../../css/uniform-styles.css'

const Navbar = () => {

    const { toggleBurger, setToggleBurger } = useContext(AppContext)

    const burgerRef = useRef(null);

    const handleBurgerClick = () => {
        setToggleBurger(!toggleBurger);
    };

    return (
        <div className='navbar-wrapper'>
            <div className='logo-wrapper'>
                <p>INSERYT LOGO HERE</p>
            </div>

            <div className='menu-wrapper'>
                <p>MENU1</p>
                <p>MENU2</p>
                <p>MENU3</p>
                <p>MENU4</p>
                <p> | </p>
                <p>MENU5</p>
                <p>MENU6</p>
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

                            <p>MENU1</p>
                            <p>MENU2</p>
                            <p>MENU3</p>
                            <p>MENU4</p>
                            <p>MENU5</p>
                            <p>MENU6</p>
                        </div>
                    </div>

                </CSSTransition>
            </div >

        </div >
    )
}

export default Navbar