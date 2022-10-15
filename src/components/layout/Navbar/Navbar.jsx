import { useContext } from "react"
import { Link } from "react-router-dom"

import Logo from '../../../assets/img/logo.png'

/* Context */
import {Context} from '../../../context/UserContext'

import './styles.css'

const Navbar = () => {
    const { authenticated, logout } = useContext(Context)

    return (
        <nav className="navbar">
        <div className="navbar_logo">
            <Link to="/"><img src={Logo} alt="Logo da empresa Comsentimento" /></Link>
        </div>
        <ul>
        {authenticated ? 
            (
                <>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/manager">Gerenciar Editais</Link></li>
                    <li onClick={logout}>Sair</li>
                </>
            ) 
            : 
            (
                <>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/login">Entrar</Link></li>
                </>
            )

            }
        </ul>
    </nav>
    )
}
  
export default Navbar