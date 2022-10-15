import './styles.css'

import LogoFooter from '../../../assets/img/logo-footer.png'

const Footer = () => {
    return (
        <footer className='footer_Container'>
            <div className='logo_footer'>
                <img src={LogoFooter} alt="" />
            </div>
            <div className='content_footer'>
                <h3>Contato</h3>
                <h4>Quer conhecer mais sobre o que fazemos e como trabalhamos ?</h4>
                <p>Entre em contato com a gente</p>
                <div>
                    <a href="https://comsentimento.com.br/contato/" target="_blank" id='btn_footer'>Entrar em Contato</a>
                </div>
            </div>
        </footer>
    )
}
  
export default Footer