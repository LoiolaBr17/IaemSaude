import { useState,useEffect } from 'react'

import api from '../../../utils/api'

import './styles.css'

/* Components */
import Presentation from '../../Presentation/Presentation'
import ContainerEdicts from '../../ContainerEdicts/ContainerEdicts'

const Home = () => {
    const [edicts, setEdicts] = useState([])

    useEffect(() => {

      api.get('notices?limit=50')
      .then((response) => {
        setEdicts(response.data.notices)
        console.log(response.data.notices)
      })

    }, [])

    return (
      <section>
        <div>
          <Presentation />
        </div>
        <div>
          {edicts && (<ContainerEdicts edicts={edicts}/>) }
        </div>
      </section>
    )
  }
  
  export default Home