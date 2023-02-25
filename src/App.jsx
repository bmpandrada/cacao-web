import React, {Fragment} from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LottiesLoading from './components/loader/lotties';

import Header from '../src/components/Header';
import {About, Features, Tours, Stories, Book} from './components/pages/Home';
import Footer from './components/Footer/Footer';
import './index.scss'


function App() {
  const [loading, setLoading] = useState(true)
  

  useEffect(()=>{
    setLoading(true)
     setTimeout(()=>{
      setLoading(false)
    },3000)
  
  },[]);

  return (<React.Fragment>
    {loading ? <LottiesLoading /> : 
    <Router>
    <Header />
    <main>
    <About />
    <Features />
    <Tours />
    <Stories />
    <Book />
    </main>
    <Footer />
   </Router>}
   </React.Fragment>
  )
}

export default App
