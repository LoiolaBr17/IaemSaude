import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import useFlashMessage from '../../../hooks/useFlashMessage'

import api from "../../../utils/api"
import Axios from "axios"

import './styles.css'

const Manager = () => {
  const [edicts, setEdicts] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0) 
  const [displacement, setDisplacement] = useState(0)
  const pages = Math.ceil(total / 10)

  const {setFlashMessage} = useFlashMessage()

  useEffect(() => {

    api.get(`notices?limit=10&offset=${displacement}`)
    .then((response) => {
      setEdicts(response.data.notices)
      setTotal(response.data.total)
    })

  }, [displacement])

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

  const setPage = (index) => {
    const displacement = 10 * index
    setCurrentPage(index)
    setDisplacement(displacement)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <section className="manager_container">
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

          <div id='manager_btn_pagination'>
            {Array.from(Array(pages), (item, index) => {
              return (
                <button 
                  onClick={() => setPage(index)} 
                  className="btn_pagination" 
                  value={index} 
                  key={index}
                  style={index === currentPage ? {backgroundColor: "#604fff", color: "#fff"}: null}
                >
                  {index+1}
                </button> 
              )
            })}
          </div>

          {edicts !== undefined && edicts.length === 0 && <p>Não há editais cadastrados</p>}
        </div>
      </section>
    )
}
  
export default Manager