import styles from '../styles/Home.module.css'
import Navbar from '../src/components/navbar'
import Hero from '../src/components/hero'
import Projects from '../src/components/projects'
import Tecnologies from '../src/components/tecnologies'
import Contact from '../src/components/contact'
import { PrismaClient } from '@prisma/client'


export default function Home({projects, info}) {
  console.log(projects, info)

  return (
   <>
    <Navbar />
    <Hero />
    <Projects />
    <Tecnologies/>
    <Contact/>
   </>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const info = await prisma.info.findMany()
  return {
    props: {
      info
    }
  }
}

