import { Link } from 'react-router-dom'

import './styles.css'

const EdictCard = ({edict}) => {
    return (
        <div className='card'>
            <p>Edital: {edict.noticeTitle}</p> 
            <p>Status: {edict.noticeStatus === 'true' ? 'O edital está aberto':'O edital está fechado'} </p>
            <p>Data de Início: {edict.noticeOpeningDate}</p>
          
            <Link to={`/edict/${edict.noticeID}`}>Ver Detalhes</Link>     
        </div>
    )
}

export default EdictCard