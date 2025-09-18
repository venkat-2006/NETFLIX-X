import React from 'react'
import Home from './components/pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from "./components/pages/Login/Login"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
      </Routes>
     
      
    </div>
  )
}

export default App
