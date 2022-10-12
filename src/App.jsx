import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

/* Components */
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

/* Pages */
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Manager from './components/Pages/Manager/Manager'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/manager' element={<Manager />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
