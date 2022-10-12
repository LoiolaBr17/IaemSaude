import { useState } from 'react'
import { Link } from "react-router-dom"

import Input from "../../form/Input/Input"

import '../../Form/FormCSS/styles.css'



const Login = () => {
  const [ user,setUser ] = useState({})

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <section className="form_container">
        <h1>Entrar na Área Administrativa</h1>

        <form onSubmit={handleSubmit}>
            <Input 
              text = "E-mail"
              type = "email"    
              name = "email"
              placeholder = "Digite o seu email"
              handleOnChange={handleChange}
            />
            <Input 
              text = "Senha"
              type = "password"    
              name = "password"
              placeholder = "Digite a sua senha"
              handleOnChange={handleChange}
            />
            
            <input type="submit" value="Entrar" />
        </form>

        <p>Não é um administrador ? <Link to='/'>Clique aqui.</Link></p>
    </section>
)
    
}

export default Login