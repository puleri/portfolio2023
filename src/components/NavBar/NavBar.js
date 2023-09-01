import React, {useEffect, useState} from 'react'
import logo from '../../assets/photos/wheat.svg'
import css from './NavBar.module.css'
import HamburgerButton from './HamburgerButton';

const Navbar = () => {

    return (
      <>
      <div className={css.containerCenter}>
            <HamburgerButton/>
            <img alt="Matt Puleri Logo" src={logo} className={css.logo}/>
      </div>
      </>
    )
}

export default Navbar