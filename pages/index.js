import styles from '../styles/Home.module.css'
import Navbar from '../src/components/navbar'
import Hero from '../src/components/hero'
import Projects from '../src/components/projects'

export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <Projects />
   </>
  )
}
