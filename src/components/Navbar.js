import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/home'} className='logo'>
                <img src={navLogo} className='nav-logo'/> Media Upoader
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <Link to={'/home'}>
                        <a class="nav-link">Home</a>
                    </Link>
                    <Link to={'/postImage'}>
                        <a class="nav-link">Upload</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar