import Register from './assets/register'
import Login from './assets/login'
import './App.css'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
  )
}

export default App
