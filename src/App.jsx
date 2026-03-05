import React from 'react'
import Card from './components/Card'
import CardDetails from './components/CardDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/student/:id/" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App