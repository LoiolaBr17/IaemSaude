import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

/* Components */
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Container from './components/layout/Container/Container'
import Message from './components/layout/Message/Message'

/* Pages */
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Manager from './components/Pages/Manager/Manager'
import EdictDetails from './components/Pages/EdictDetails/EdictDetails'
import AddEdict from './components/Pages/AddEdict/AddEdict'
import EditEdict from './components/Pages/EditEdict/EditEdict'

/* Context */
import {UserProvider} from './context/UserContext'

/* Authentication */
import { PrivateRoutes } from './utils/privateRoutes'

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/manager' element={ <PrivateRoutes><Manager /></PrivateRoutes> } />
            <Route path='/edict/:id' element={<PrivateRoutes><EdictDetails /></PrivateRoutes>}/>
            <Route path='/edict/add' element={<PrivateRoutes><AddEdict  /></PrivateRoutes>} />
            <Route path='/edict/edit/:id' element={<PrivateRoutes><EditEdict /></PrivateRoutes>} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
