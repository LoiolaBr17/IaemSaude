import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Axios from "axios"

import EdictForm from '../../Form/EdictForm/EdictForn'

import useFlashMessage from "../../../hooks/useFlashMessage"

const EditEdict = () => {
    const [edict, setEdict] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')
    const {id} = useParams()
    const {setFlashMessage} = useFlashMessage()
    let navigate = useNavigate()

    useEffect(() => {
        var axios = Axios.create()

        axios({
            method: 'get',
            responseType: 'json',
            headers: {
                Authorization: `${JSON.parse(token)}`
            },
            url: `https://api.comsentimento.com.br/notices/${id}`,
        })
        .then(response => {
            let data = response.data
            let [day,month,year] = response.data.noticeOpeningDate.split('/')

            if(day.length < 2) day = "0"+day

            const formatnoticeOpeningDate = year+"-"+month+"-"+day
            
            data.noticeOpeningDate = formatnoticeOpeningDate
            setEdict(data)
        })
        .catch(error => {
            console.log(error)
        });
    }, [token,id])

    const updateEdict = async (edictForUpdate) => {
        let msgType = 'success'
        let msgText = 'Edital atualizado com sucesso'
        delete edictForUpdate.noticeID
        
        var axios = Axios.create()

        axios({
            method: 'put',
            responseType: 'json',
            headers: {
                Authorization: `${JSON.parse(token)}`
            },
            url: `https://api.comsentimento.com.br/notices/${id}`,
            data: {
                ...edictForUpdate
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            msgText = 'Erro a atualizar o edital'
            msgType = 'error'
            console.log(error)
        });
        setFlashMessage(msgText,msgType)
        navigate('/manager')
    }

    return (
        <section className="editEdict_header">
            <div>
                <h1>Editando o edital: {edict.noticeTitle}</h1>
            </div>
            {edict.noticeTitle && (
                <EdictForm 
                    handleSubmit={updateEdict}
                    btnText="Atualizar Edital"
                    edictData = {edict}
                />
            )}
        </section>
    )
}

export default EditEdict