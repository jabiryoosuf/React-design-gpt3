import React from 'react'

import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from './containers';
import { Cta, Brand ,NavBar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />

      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
