import styles from '../../styles/Tecnologies.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Tecnologies = ({technologies}) => {
  const [ref, inView] = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.3
        }
      })
    }
    else{
      animation.start({
        opacity: 0,
        y: '8vh',
      })
    }
  }, [inView])
      

  return (
    <>
        <div  ref={ref} className={styles.tecnologies}>
            <div className={styles.containerStatusBar}>
                <h1 className={styles.titleContainer}>
                    Tecnologias
                </h1>
            </div>
        <motion.div animate={animation} className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.imageContent}>
              <h1 className={styles.technologyTitle}>
                  Frontend
              </h1>
            </div>
            <div className={styles.projectInfo}>
                <ul className={styles.technologiesList}>
                  {
                    technologies[0]?.frontend.map((technology, index) => (
                        <li key={index} className={styles.technology}>
                            {technology}
                        </li>
                  ))}
                </ul>
            </div>
            <div className={styles.figure}>
                    <motion.div 
                    animate={{
                      rotate: [180, 720],
                      borderRadius: ['0%', '30%', '0%', '30%'],
                      transition: {
                        duration: 2,
                        type: 'spring',
                        bounce: 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }
                    }}
                    className={styles.square}/>
            </div>
          </div>
          <div className={styles.projectTwo}>
            <div className={styles.imageContentTwo}>
              <h1 className={styles.technologyTitleTwo}>
                Backend
              </h1>
            </div>
              <div className={styles.projectInfo}>
                <ul className={styles.technologiesList}>
                  {
                    technologies[0]?.backend.map((technology, index)=> (
                        <li key={index} className={styles.technology}>
                            {technology}
                        </li>
                  ))}
                </ul>
              </div>
                <div className={styles.figure}>
                    <motion.div 
                    animate={{
                      rotate: 360,
                      borderRadius: ['50%', '30%', '30%', '50%'],
                      transition: {
                        duration: 2,
                        type: 'spring',
                        bounce: 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }
                    }}
                    className={styles.circle}/>
                </div>
          </div>
        </motion.div>
        </div>
    </>
  )
}

export default Tecnologies