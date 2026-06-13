import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProfileCard from './Components/ProfileCard'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import CardPractice from './Components/CardPractice'
function App (){

    return (<div>
   <Navbar/>
   <ProfileCard/>
   <Pricing/>
   <CardPractice/>

  </div>)
  
}
export default App
