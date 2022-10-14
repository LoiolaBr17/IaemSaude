import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Manager = () => {
    const [Edict, setEdict] = useState([])

    return (
      <section>
        <div>
          <h1>Editais Cadastrados</h1>
          <Link to="/edict/add">Cadastrar Edital</Link>
        </div>
        <div>
          {Edict.length > 0 && <p>Editais Cadastrados</p>}
          {Edict.length === 0 && <p>Não há editais cadastrados</p>}
        </div>
      </section>
    )
}
  
export default Manager