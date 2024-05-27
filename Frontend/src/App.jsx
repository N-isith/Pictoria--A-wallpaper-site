import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <>
        <div className='App flex flex-col min-h-screen'>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/signup' element={< SignUp/>} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  )
}

export default App
