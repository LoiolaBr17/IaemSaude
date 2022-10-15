import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import useFlashMessage from '../../../hooks/useFlashMessage'

import api from "../../../utils/api"
import Axios from "axios"

import './styles.css'

const Manager = () => {
  const [edicts, setEdicts] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')
  const {setFlashMessage} = useFlashMessage()

  useEffect(() => {

    api.get('notices?limit=50')
    .then((response) => {
      setEdicts(response.data.notices)
    })

  }, [])

  const removeEdict = async (id) => {
    let msgType = 'success'
    let msgText = 'Edital removido com sucesso'

    var axios = Axios.create()
        
    await axios({
      method: 'delete',
      responseType: 'json',
      headers: {
        Authorization: `${JSON.parse(token)}`
      },
      url: `https://api.comsentimento.com.br/notices/${id}`,
            
    })
    .then(response => {
      const updatedEdicts = edicts.filter((edict) =>edict.noticeID !== id)
      setEdicts(updatedEdicts)
      msgText = "Edital removido com sucesso" 
      msgType = "success"
    })
    .catch(error => {
      msgText = "Não foi possível remover o edital" 
      msgType = "error"
    });

    setFlashMessage(msgText,msgType)
  }

  return (
    <section>
      <div className="manager_header">
        <h1>Editais Cadastrados</h1>
        <Link to="/edict/add">Cadastrar Edital</Link>
      </div>

      <div className="manager_container">
        {edicts && 
          edicts.map((edict,index) => (
            <div key={index} className='manager_row'>
              <span className="bold">Edital: {edict.noticeTitle}</span>
              <div className="actions">
                <Link to={`/edict/edit/${edict.noticeID}`}>Editar</Link>
                <button onClick={() => {removeEdict(edict.noticeID)}}>Excluir</button>
              </div>
            </div>
          ))}
          {edicts !== undefined && edicts.length === 0 && <p>Não há editais cadastrados</p>}
        </div>
      </section>
    )
}
  
export default Manager