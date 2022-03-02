import styles from '../../styles/project.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Project = ({project, info}) => {

  return (
    <>
      <div
      className={styles.statusBarContainer}>
        <h1 className={styles.title}>
          {project.name}
        </h1>
      </div>
      <div  className={styles.projectContainer}>
        <div className={styles.dates}>
          <p>
            Fecha de inicio: {project.startDate}
          </p>
          <p>
            Fecha de finalización: {project.endDate}
          </p>
        </div>
        <div className={styles.description}>
          <p>
            {project.description}
          </p>
        </div>
        <div className={styles.technologies}>
          {project.frontend.length > 0 && (
            <div className={styles.frontend}>
              <h2>Frontend</h2>
              <ul>
                {project.frontend.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.backend.length > 0 && (
            <div className={styles.backend}>
              <h2>Backend</h2>
              <ul>
                {project.backend.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {project.video ? (
        <div className={styles.projectVideo}>
          <video src={project.video} controls autoPlay/>
        </div>
        ) : (
        <div className={styles.projectImg}>
            <img src={project.img}/>
        </div>
        )
      }
      </div>
      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>¿Te interesa mi trabajo?<br/>¡Hablemos!</h2>
        <div className={styles.links}>
          <Link href={info[0].githubProfile} passHref>
            <p className={styles.contactLink}>Github</p>
          </Link>
          <p>{info[0].mail}</p>
          <Link href={info[0].linkedin} passHref>
            <p className={styles.contactLink}>Linkedin</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Project