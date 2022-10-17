import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom"

import api from "../../../utils/api"

import './styles.css'

const EdictDetails = () => {
    const { id } = useParams()
    const [dados, setDados] = useState({})
     

    useEffect( () => {
        api.get(`notices/${id}`)
        .then( (response) => {
            setDados(response.data)
        })
        
    }, [])

    return (
        <>
            {dados !== undefined && (
                <div className='EdictDetails'>
                    <h1>{dados.noticeTitle}</h1>
                    <h3>Sobre o Projeto</h3>
                    <p>{dados.noticeDescription}</p>
                    <p>Data de abertura do edital: <span className='openingData'>{dados.noticeOpeningDate}</span></p>
                </div>
            )}
        </>
    )
}

export default EdictDetails