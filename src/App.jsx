import React from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import ProductViewer from './component/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/all'
import Showcase from './component/Showcase'

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (

    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase/>

    </main>
  )
}

export default App
