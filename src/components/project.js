import styles from '../../styles/project.module.css'

const Project = ({project}) => {
  console.log(project)
  return (
    <>
      <div className={styles.statusBarContainer}>
        <h1 className={styles.title}>
          {project.name}
        </h1>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.dates}>
          <p>
            {project.startDate}
          </p>
          <p>
            {project.endDate}
          </p>
        </div>
      </div>
    </>
  )
}

export default Project