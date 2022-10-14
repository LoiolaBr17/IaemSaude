import { Link } from 'react-router-dom'

import './styles.css'

const EdictCard = ({edict}) => {
    return (
        <div className='card'>
            <div className='content'>
                <p>{edict.noticeTitle}</p> 
                <p>Status: {edict.noticeStatus === 'true' ? 'O edital está aberto':'O edital está fechado'} </p>
            </div>

            <Link to={`/edict/${edict.noticeID}`}>Ver Detalhes</Link>
        </div>
    )
}

export default EdictCard