import React from 'react'
import './App.css';
import Header from './components/Header'
import Detail from './components/Detail'
import About from './components/About'
import Lienlac from './components/Lienlac'
import Video from './components/Video'
import Footer from './components/Footer'
import Teams from './components/Teams';
const LayoutMaster =()=>{
   return(
     <div>
          <Header/>
          <Detail/>
          <Teams/>
          <About/>
          <Video/>
          <Lienlac/>
          <Footer/>
     </div>
   )
}
export default React.memo(LayoutMaster)

