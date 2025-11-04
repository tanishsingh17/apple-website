import React from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import ProductViewer from './component/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (

    <main>
        <NavBar />
        <Hero />
        <ProductViewer />

    </main>
  )
}

export default App
