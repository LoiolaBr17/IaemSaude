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

/* Pages */
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Manager from './components/Pages/Manager/Manager'

/* Context */
import {UserProvider} from './context/UserContext'

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/manager' element={<Manager />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
