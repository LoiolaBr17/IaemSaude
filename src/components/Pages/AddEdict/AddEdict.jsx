import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Axios from "axios"

/* Components */
import EdictForm from '../../Form/EdictForm/EdictForn'
import useFlashMessage from '../../../hooks/useFlashMessage'

import './styles.css'


const AddEdict = () => {
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage()
    let navigate = useNavigate()


    const registerEdict = async (edict) => {
        let msgType = ''
        let msgText = ''
        

        var axios = Axios.create()
        
        await axios({
            method: 'post',
            responseType: 'json',
            headers: {
                Authorization: `${JSON.parse(token)}`
            },
            url: `https://api.comsentimento.com.br/notices`,
            data: {
                ...edict
            }
        })
        .then(response => {
             console.log(response)
             msgText = "Cadastro realizado com sucesso" 
             msgType = "success"
        })
        .catch(error => {
            msgText = "Erro ao realizar o cadastro" 
            msgType = "error"
        });


        setFlashMessage(msgText,msgType)
        
        if(msgType !== 'erro'){
            navigate('/manager')
        }
    }

    return (
        <section className='AddEdict'>
            <div className='header'>
                <h2>Cadastre um Edital</h2> 
                <EdictForm handleSubmit={registerEdict} btnText="Cadastrar Edital"/>
            </div>
        </section>
    )
}

export default AddEdict