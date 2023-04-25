import Header from './components/Header'
import Bio from './components/Bio'
import CallToAction from './components/CallToAction'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import Projects from './components/Projects'

gsap.registerPlugin(ScrollTrigger)

function App() {

  //create refs and empty arrays for refs.current
  const fadeDowns = useRef([]);
  fadeDowns.current = [];
  const flips = useRef([]);
  flips.current = [];

  //function to add each element with ref={addToFadeDowns} to the fadeDowns.current array
  const addToFadeDowns = el => {
    if (el && !fadeDowns.current.includes(el)) {
      fadeDowns.current.push(el)
    }
  }

  //function to add each element with ref={addToFlips} to the fadeDowns.current array
  const addToFlips = el => {
    if (el && !flips.current.includes(el)) {
      flips.current.push(el)
    }
  }
  //adds the GSAP scrollTrigger and to each element in the fadeDowns array after DOM render
  useEffect(() => {
    fadeDowns.current.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: '-50',
        duration: 1,
        opacity: 0
      })
    })
  }, [])

  //adds the GSAP scrollTrigger and to each element in the flips array after DOM render
  useEffect(() => {
    flips.current.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        rotationY: 180,
        duration: 1,
        opacity: 0
      })
    })
  }, [])



  return (
    <>
      <Header />
      <CallToAction addToFadeDowns={addToFadeDowns} />
      <Projects />
      <Portfolio addToFadeDowns={addToFadeDowns} addToFlips={addToFlips} />
      <Contact addToFadeDowns={addToFadeDowns} />
      <Footer />
    </>
  )
}

export default App
