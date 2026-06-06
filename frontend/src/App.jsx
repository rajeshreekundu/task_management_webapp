import { useContext } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { ThemeContext } from './contexts/index';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Signup';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`tm-app ${theme}`}>
      {/* <Dashboard/> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
