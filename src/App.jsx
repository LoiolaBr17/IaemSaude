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

/* Context */
import {UserProvider} from './context/UserContext'

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
            <Route path='/manager' element={<Manager />} />
            <Route path='/edict/:id' element={<EdictDetails />}/>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
