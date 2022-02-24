import styles from '../../styles/Tecnologies.module.css'

const Tecnologies = ({technologies}) => {
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
                    <div className={styles.circle}/>
                </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Tecnologies