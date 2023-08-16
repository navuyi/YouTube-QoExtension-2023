import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Setup from './views/Setup/Setup'
import Settings from './views/Settings/Settings'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Setup />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </HashRouter>
  )
}

export default App
