import About from './components/About';
import Navbar from './components/Navbar'
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            
            <Route exact path='signup' Component={Signup}></Route>
            <Route exact path='login' Component={Login}></Route>

            <Route exact path='/' Component={Home}></Route>
            <Route exact path='/about' Component={About}></Route>
          

          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
