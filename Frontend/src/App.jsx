import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ImagerProfile from './components/ImagerProfile';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <>
        <div className='App flex flex-col min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={< SignUp />} />
            <Route path='/signin' element={< SignIn />} />
            <Route path='/profile' element={< ImagerProfile />} />
            <Route path='/about' element={<AboutUs />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
