import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

import './App.css'
import GanresMovie from './pages/GanresMovie/GanresMovie'
import OneMovie from './pages/OneMovie/OneMovie'
import Search from './pages/Search/Search'


function App() {

  return (
    <>
      <Header />
      <div className='App'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/genresmovie/:id' element={<GanresMovie />} />
          <Route path='/movie/:id' element={<OneMovie />} />
          <Route path='/searchMovies' element={<Search />} />
        </Routes>
      </div>
    </>
  )
}

export default App
