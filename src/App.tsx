import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/header/header'
import { Home } from './components/home/home'
import { Footer } from './components/footer/footer'
import { Semantic } from './components/semantics/semantics'
import { Styles } from './components/styles/styles'
import { Density } from './components/density/density'
import { Contact } from './components/contact/contact'
import { Standards } from './components/semantics/standards'
import { Configuration } from './components/styles/configuration'
import { DensityConfig } from './components/density/densityConfig'
import { Usage } from './components/usage/usage'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/semantics/standards" Component={Standards} />
          <Route path="/semantics" Component={Semantic} />
          <Route path="/styles/configuration" Component={Configuration} />
          <Route path="/styles" Component={Styles} />
          <Route path="/density/configuration" Component={DensityConfig} />
          <Route path="/density" Component={Density} />
          <Route path="/contact" Component={Contact} />
          <Route path="/usage" Component={Usage} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
