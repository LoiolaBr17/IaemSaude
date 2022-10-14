import EdictCard from '../EdictCard/EdictCard'

import './styles.css'

const ContainerEdicts = ({edicts}) =>{ 
    return (
        <section className='containerEdicts'>
            <h2>Editais Cadastrados</h2>
            {edicts === undefined && <p>Não há editais cadastrados</p>}
            {edicts.length !== 0 > 0 && 
                edicts.map((edict) => (
                    <EdictCard edict={edict} key={edict.noticeID}/>
                ))
            }
        </section>

    )
}

export default ContainerEdicts