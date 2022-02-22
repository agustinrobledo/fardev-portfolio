import styles from '../../styles/Tecnologies.module.css'
import { technologies } from '../data'

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
                <ul className={styles.technologiesList}>
                  {
                    technologies.frontend.map(technology => (
                        <li key={technology.id} className={styles.technology}>
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
                    technologies.backend.map(technology => (
                        <li key={technology.id} className={styles.technology}>
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