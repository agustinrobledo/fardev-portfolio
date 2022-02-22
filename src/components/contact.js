import Link from 'next/link'
import styles from '../../styles/contact.module.css'

const Contact = () => {
  return (
    <>
        <div className={styles.contact}>
            <div className={styles.containerStatusBar}>
                <h1 className={styles.titleContainer}>
                    Contacto
                </h1>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.talk}>
                    <h1 className={styles.contactTitle}>
                        ¿Te interesa mi trabajo? <br/>
                        ¡Hablemos!
                    </h1>
                </div>
                <div className={styles.socialsContainer}>
                    <h1 className={styles.text}>
                        Linkedin:
                    </h1>
                    <Link href="https://www.linkedin.com/in/fernando-agustin-robledo" passHref>
                        <h2 className={styles.link}>
                            /fernando-agustin-robledo
                        </h2>
                    </Link>
                    <h1 className={styles.text}>
                        E-mail:
                    </h1>
                    <h2 className={styles.mail}>
                        agustinrobledo59.ar@gmail.com
                    </h2>
                    <h1 className={styles.text}>
                        Github:
                    </h1>
                    <Link href="https://www.github.com/agustinrobledo" passHref>
                        <h2 className={styles.link}>
                            /agustinrobledo
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact