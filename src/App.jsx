import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

import './App.css'


function App() {

  return (
    <>
    <Header />
    <div className='App'>
        <Routes >
          <Route path='/' element={<Home />}/> 
        </Routes>
    </div>
    </>
  )
}

export default App
