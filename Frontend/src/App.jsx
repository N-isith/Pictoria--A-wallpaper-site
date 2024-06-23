import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ImagerProfile from './components/ImagerProfile';

function App() {
  return (
    <Router>
      <>
        <div className='App flex flex-col min-h-screen'>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/signup' element={< SignUp/>} />
            <Route path='/signin' element={< SignIn/>} />
            <Route path='/profile' element={< ImagerProfile/>} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  )
}

export default App
