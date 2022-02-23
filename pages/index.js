import styles from '../styles/Home.module.css'
import Navbar from '../src/components/navbar'
import Hero from '../src/components/hero'
import Projects from '../src/components/projects'
import Tecnologies from '../src/components/tecnologies'
import Contact from '../src/components/contact'
import { PrismaClient } from '@prisma/client'


export default function Home({info, projects, experience}) {
  console.log(experience)
  return (
   <>
    <Navbar />
    <Hero />
    <Projects projects={projects} />
    <Tecnologies/>
    <Contact info={info}/>
   </>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const experience = await prisma.experience.findMany()
  const projects = await prisma.projects.findMany()
  const info = await prisma.info.findMany()
  return {
    props: {
      info,
      projects,
      experience
    }
  }
}

