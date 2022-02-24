import styles from '../../styles/Projects.module.css'

const Projects = ({projects}) => {
  return (
    <>  
      <div className={styles.projects}>
        <div className={styles.containerStatusBar}>
            <h1 className={styles.titleContainer}>
                Proyectos
            </h1>
      </div>
        <div className={styles.projectsContainer}>
        {projects?.map(project => (
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