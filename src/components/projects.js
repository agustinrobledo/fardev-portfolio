import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


const Projects = ({projects}) => {
  const [ref, inView] = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          type: 'tween',
          bounce: 0.3
        }
      })
    }
    else {
      animation.start({
        opacity: 0,
        y: '8vh',
      })
    }
  }, [inView])

  return (
    <>
      <div ref={ref} className={"container flex mx-auto py-10 flex-col"}>
        <div className={"flex w-auto h-6 align-middle text-center"}>
            <h1 className={"ml-4 text-2xl font-bold"}>
                Proyectos
            </h1>
      </div>
        <motion.div animate={animation} className={"flex flex-col w-auto gap-20 mt-20"}>
        {projects?.map(project => (
        <div className={"flex w-auto h-50"} key={project.name}>
          <img src={project.img} alt={project.name} className={"w-1/4"}/>
            <div className={"w-2/4"}>
              <Link href={`./projects/${project.id}`} passHref>
              <motion.h1
              whileHover={{
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
              className={"ml-3 text-4xl font-bold"}>
                  {project.name}
              </motion.h1>
              </Link>
              <p className={"ml-3 mt-2 text-xl font-sans "}>
                  {project.description}
              </p>
          </div>
        </div>
        ))}
      </motion.div>
      </div>
    </>
  )
}

export default Projects