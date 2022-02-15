import styles from '../styles/Home.module.css'
import Navbar from '../src/components/navbar'
import Hero from '../src/components/hero'
import Projects from '../src/components/projects'
import Tecnologies from '../src/components/tecnologies'

export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <Projects />
    <Tecnologies/>
   </>
  )
}
