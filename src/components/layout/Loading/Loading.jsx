import './styles.css'
import loadingImg from '../../../assets/img/loading.svg'

const Loading = () => {
    return (
        <div className='loader_container'>
            <img className='loader ' src={loadingImg} alt="loading" />
        </div>
    )
}

export default Loading