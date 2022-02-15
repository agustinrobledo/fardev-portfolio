import styles from '../../styles/Projects.module.css'

const Projects = () => {
  return (
    <>  
      <div className={styles.projects}>
        <div className={styles.containerStatusBar}>
            <h1 className={styles.titleContainer}>
                Proyectos
            </h1>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.imageContent}>aca va una imagen</div>
              <div className={styles.projectInfo}>
                <h1 className={styles.projectTitle}>
                    Proyecto 1
                </h1>
                <p className={styles.projectDescription}>
                    Subtitulo
                </p>
            </div>
          </div>
        <div className={styles.project}>
            <div className={styles.imageContent}>aca va una imagen</div>
              <div className={styles.projectInfo}>
                <h1 className={styles.projectTitle}>
                    Proyecto 1
                </h1>
                <p className={styles.projectDescription}>
                    Subtitulo
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.containerStatusBar}>
            <h1 className={styles.titleContainer}>
                Proyectos
            </h1>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.imageContent}>aca va una imagen</div>
              <div className={styles.projectInfo}>
                <h1 className={styles.projectTitle}>
                    Proyecto 1
                </h1>
                <p className={styles.projectDescription}>
                    Subtitulo
                </p>
            </div>
          </div>
        <div className={styles.project}>
            <div className={styles.imageContent}>aca va una imagen</div>
              <div className={styles.projectInfo}>
                <h1 className={styles.projectTitle}>
                    Proyecto 1
                </h1>
                <p className={styles.projectDescription}>
                    Subtitulo
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects