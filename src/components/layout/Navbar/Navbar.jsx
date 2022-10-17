import { useContext } from "react"
import { Link } from "react-router-dom"

import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import Logo from '../../../assets/img/logo.png'

/* Context */
import {Context} from '../../../context/UserContext'

import './styles.css'

const Navbar = () => {
    const { authenticated, logout } = useContext(Context)

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <Link to="/"><img src={Logo} alt="" id="navbar_logo"/></Link>

            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>

            <nav ref={navRef}>
                
                
                    {authenticated ? 
                        (
                            <>
                                <Link to="/" onClick={showNavbar}>Início</Link>
                                <Link to="/manager" onClick={showNavbar}>Gerenciar Editais</Link>
                                <button onClick={() => {
                                    logout()
                                    showNavbar()
                                }}>Sair</button>
                            </>
                        ) 
                        : 
                        (
                            <>
                                <Link to="/" onClick={showNavbar}>Início</Link>
                                <Link to="/login" onClick={showNavbar}>Entrar</Link>
                            </>
                        )

                        }
                

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
        
        </header>
    )
}
  
export default Navbar