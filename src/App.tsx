import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/header/header'
import { Home } from './components/home/home'
import { Footer } from './components/footer/footer'
import { Semantic } from './components/semantics/semantics'
import { Styles } from './components/styles/styles'
import { Density } from './components/density/density'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/semantics" Component={Semantic} />
          <Route path="/styles" Component={Styles} />
          <Route path="/density" Component={Density} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
