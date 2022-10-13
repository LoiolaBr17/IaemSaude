const ContainerEdicts = ({edicts}) =>{ 
    return (
        <section>
            <h2>Container dos editais</h2>
            {edicts.length === 0 && <p>Não há editais cadastrados</p>}
        </section>

    )
}

export default ContainerEdicts