import { useState,useEffect,useRef } from 'react'

import api from '../../../utils/api'

import './styles.css'

/* Components */
import Presentation from '../../Presentation/Presentation'
import ContainerEdicts from '../../ContainerEdicts/ContainerEdicts'

const Home = () => {
    const [edicts, setEdicts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [total, setTotal] = useState(0) 
    const [displacement, setDisplacement] = useState(0)
    const [removeLoading, setRemoveLoading] = useState(false)

    const pages = Math.ceil(total / 10)
    const edictsDivRef = useRef(null)

    useEffect(() => {

      api.get(`notices?limit=10&offset=${displacement}`)
      .then((response) => {
        setRemoveLoading(true)
        setEdicts(response.data.notices)
        setTotal(response.data.total)
      })

    }, [displacement])

    const setPage = (index) => {
      const displacement = 10 * index
      setCurrentPage(index)
      setDisplacement(displacement)
      edictsDivRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }

    return (
      <section>
        <div>
          <Presentation edictsContainer={edictsDivRef}/>
        </div>
        <div ref={edictsDivRef}>
          {edicts && (<ContainerEdicts edicts={edicts} removeLoading={removeLoading}/>) }
          
          <div id='home_btn_pagination'>
            {edicts && Array.from(Array(pages), (item, index) => {
              return (
                <button 
                  onClick={() => setPage(index)} 
                  className="btn_pagination" 
                  value={index} 
                  key={index}
                  style={index === currentPage ? {backgroundColor: "#604fff", color: "#fff"}: null}
                >
                  {index+1}
                </button> 
              )
            })}
          </div>
        </div>
      </section>
    )
  }
  
  export default Home