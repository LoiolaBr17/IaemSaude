import './styles.css'

const Presentation = ({edictsContainer}) => {
    const scrooll = () => {
        edictsContainer.current.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div className='presentation'>
            <h1>Programa de Desenvolvimento de Inteligência Artificial em Saúde</h1>
            <p>
                A comsentimento têm a grande honra de lançar o mais novo programa de Desenvolvimento de
                Inteligência Artificial na área da saúde. Com ojetivo de Aproximar a organização do
                ambiente de pesquisa acadêmico, Aumentar a contratação e retenção de talentos de IA em saúde,
                Demonstrar autoridade no tema atráves de publicações científicas e o Desenvolvimento de novas
                tecnologias. 
            </p>

            <button onClick={scrooll} className="btn_Presentation">Veja nossos editais cadastrados</button>
        </div>
    )
}

export default Presentation