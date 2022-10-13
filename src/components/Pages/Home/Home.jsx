import { useState,useEffect } from 'react'

import api from '../../../utils/api'

import './styles.css'

/* Components */
import Presentation from '../../Presentation/Presentation'

const Home = () => {
    const [edicts, setEdicts] = useState([])

    useEffect(() => {

      api.get('notices')
      .then((response) => {
        setEdicts(response.data.notices)
        console.log(edicts.length)
      })

    }, [])

    return (
      <section>
        <div>
          <Presentation />
        </div>
        <div>
          {edicts.length === 0 && <p>Não há editais cadastrados.</p>}
        </div>
      </section>
    )
  }
  
  export default Home