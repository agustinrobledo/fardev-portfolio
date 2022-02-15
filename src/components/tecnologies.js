import styles from '../../styles/Tecnologies.module.css'

const Tecnologies = () => {
  return (
    <>
        <div className={styles.tecnologies}>
            <div className={styles.containerStatusBar}>
                <h1 className={styles.titleContainer}>
                    Tecnologias
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
          <div className={styles.projectTwo}>
            <div className={styles.imageContentTwo}>aca va una imagen</div>
              <div className={styles.projectInfo}>
                <h1 className={styles.projectTitle}>
                    Proyecto 2
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

export default Tecnologies