import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Account, Learning, Leaderboard } from './pages'
import { Navbar } from './components'
import { Ramen } from './components/canvas'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div className="landing fixed w-screen items-center justify-center min-h-screen sm:pb-0 mb-20">
      <Ramen />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/learning' element={<Learning />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </div>

      </BrowserRouter>
    </>
  )
}

export default App
