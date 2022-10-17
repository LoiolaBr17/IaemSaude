import { useState } from "react"

import Input from '../Input/Input'
import useFlashMessage from "../../../hooks/useFlashMessage"

import './styles.css'

const EdictForm = ({handleSubmit, edictData, btnText}) => {
    const [edict, setEdict] = useState(edictData || {})
    const {setFlashMessage} = useFlashMessage()
    const handleChange = (e) => {
        setEdict({...edict, [e.target.name]: e.target.value})
    }

    const handleStatus = (e) => {
        setEdict({...edict, noticeStatus: e.target.options[e.target.selectedIndex].value})
    }

    const validateForm = () => {
        let isValid = true

        if(edict.noticeTitle === undefined || edict.noticeTitle === ''){
            isValid = false
            return isValid
        }else if(edict.noticeDescription === undefined || edict.noticeDescription === ''){
            isValid = false
            return isValid
        }else if(edict.noticeOpeningDate === undefined || edict.noticeOpeningDate === ''){
            isValid = false
            return isValid
        }else if(edict.noticeStatus === undefined || edict.noticeStatus === '' || edict.noticeStatus === 'escolha'){
            isValid = false
            return isValid
        }
        return isValid
    }

    const submit = (e) => {
        e.preventDefault()

        if(validateForm()){
            handleSubmit(edict)
        }else{
            const msgType = 'error'
            const msgText = 'Preencha todos os campos' 
            setFlashMessage(msgText,msgType) 
        }
    }

    return (
        <form className="form_container" onSubmit={submit}>
            <Input 
                text="Título do edital"
                type="text"
                name="noticeTitle"
                placeholder="Digite o título do edital"
                handleOnChange={handleChange}
                value={edict.noticeTitle || ''}
            />

            <Input 
                text="Descrição do edital"
                type="textarea"
                name="noticeDescription"
                placeholder="Digite a descrição do edital"
                handleOnChange={handleChange}
                value={edict.noticeDescription || ''}
            />

            <Input 
                text="Data de abertura do edital"
                type="date"
                name="noticeOpeningDate"
                placeholder="Digite a descrição do edital"
                handleOnChange={handleChange}
                value={edict.noticeOpeningDate || ''}
            />

            <Input 
                text="Arquivo do edital"
                type="text"
                name="noticePDFDetails"
                placeholder="Digite o link de onde se encontra o edital"
                handleOnChange={handleChange}
                value={edict.noticePDFDetailsPath || edict.noticePDFDetails || ''}
            />

            <div className="status">
                <label htmlFor="noticeStatus">Status do Edital</label>
                <select name="noticeStatus" onChange={handleStatus} value={edict.noticeStatus || ''}>
                    <option value="escolha">Escolha um Status</option>
                    <option value="true">Aberto</option>
                    <option value="false">Fechado</option>
                </select>
            </div>

         
            <input type="submit" value={btnText} />
         
        </form>
    )
}

export default EdictForm