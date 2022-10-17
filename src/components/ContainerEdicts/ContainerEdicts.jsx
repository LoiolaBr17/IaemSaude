import EdictCard from '../EdictCard/EdictCard'
import Loading from '../layout/Loading/Loading'

import './styles.css'

const ContainerEdicts = ({edicts,removeLoading}) =>{ 
    return (
        <section className='containerEdicts'>
            <h2>Editais Cadastrados</h2>
            {!removeLoading && <Loading />}
            {edicts === undefined && <p>Não há editais cadastrados</p>}
            {edicts.length !== 0 > 0 && 
                edicts.map((edict, index) => (
                    <EdictCard edict={edict} key={index}/>
                ))
            }
        </section>

    )
}

export default ContainerEdicts