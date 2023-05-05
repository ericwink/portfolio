import Header from './components/Header/Header'
import CallToAction from './components/CallToAction/CallToAction'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects/Projects'
import Bio from './components/Bio/Bio'
import { MotionConfig } from 'framer-motion'


function App() {
  return (
    <MotionConfig reducedMotion='user'>
      <Header />
      <CallToAction />
      <Projects />
      <Bio />
      <Contact />
      <Footer />
    </MotionConfig>
  )
}

export default App
