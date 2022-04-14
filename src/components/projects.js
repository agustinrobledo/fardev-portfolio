import Link from 'next/link'
import styles from '../../styles/Projects.module.css'
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
            <h1 className={"ml-4 text-xl font-bold"}>
                Proyectos
            </h1>
      </div>
        <motion.div animate={animation} className={styles.projectsContainer}>
        {projects?.map(project => (
        <div className={styles.project} key={project.name}>
          <img src={project.img} alt={project.name} className={styles.imageContent}/>
            <div className={styles.projectInfo}>
              <Link href={`./projects/${project.id}`} passHref>
              <motion.h1 
              whileHover={{
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
              className={styles.projectTitle}>
                  {project.name}
              </motion.h1>
              </Link>
              <p className={styles.projectDescription}>
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