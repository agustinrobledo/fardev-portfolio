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
            <div className={styles.imageContent}>
              <h1 className={styles.technologyTitle}>
                  Frontend
              </h1>
            </div>
              <div className={styles.projectInfo}>
                <h1 className={styles.projectTitle}>
                    Proyecto 1
                </h1>
                <p className={styles.projectDescription}>
                    Subtitulo
                </p>
              </div>
                <div className={styles.figureContainer}>
                    <div className={styles.square}/>
                </div>
          </div>
          <div className={styles.projectTwo}>
            <div className={styles.imageContentTwo}>
              <h1 className={styles.technologyTitleTwo}>
                Backend
              </h1>
            </div>
              <div className={styles.projectInfo}>
                <h1 className={styles.projectTitle}>
                    Proyecto 1
                </h1>
                <p className={styles.projectDescription}>
                    Subtitulo
                </p>
              </div>
                <div className={styles.figureContainer}>
                    <div className={styles.circle}/>
                </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Tecnologies