import { Link } from 'react-router-dom'

import './styles.css'

const EdictCard = ({edict}) => {
    return (
        <div className='card'>
            <div className='content'>
                <p>{edict.noticeTitle}</p> 
                <p>Status: {edict.noticeStatus ? 'Edital está aberto':'Edital esta fechado'} </p>
            </div>

            <Link>Ver Detalhes</Link>
        </div>
    )
}

export default EdictCard