import { Link } from "react-router-dom"

import Logo from '../../../assets/img/Logo.png'

import './styles.css'

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar_logo">
            <Link to="/"><img src={Logo} alt="Logo da empresa Comsentimento" /></Link>
        </div>
        <ul>
            <li><Link to="/login">Entrar</Link></li>
        </ul>
    </nav>
    )
}
  
export default Navbar