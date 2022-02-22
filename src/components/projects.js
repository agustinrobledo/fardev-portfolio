import styles from '../../styles/Projects.module.css'
import {data} from '../data'

const Projects = () => {
  console.log(data)
  return (
    <>  
      <div className={styles.projects}>
        <div className={styles.containerStatusBar}>
            <h1 className={styles.titleContainer}>
                Proyectos
            </h1>
      </div>
        <div className={styles.projectsContainer}>
        {data.map(project => (
        <div className={styles.project} key={project.name}>
          <img src={project.img} alt={project.name} className={styles.imageContent}/>
            <div className={styles.projectInfo}>
              <h1 className={styles.projectTitle}>
                  {project.name}
              </h1>
              <p className={styles.projectDescription}>
                  {project.description}
              </p>
          </div>
        </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Projects