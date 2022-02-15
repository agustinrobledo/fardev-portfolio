import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.container}>
        <div className={styles.homeContainer}>
            <h1 className={styles.home}>
                <Link href="/">
                    <a className={styles.link}>Fernando Agustin Robledo</a>
                </Link>
            </h1>
        </div>
        <div className={styles.linksContainer}>
            <h1 className={styles.links}>
                Blog
            </h1>
            <h1 className={styles.links}>
                Sobre mi
            </h1>
            <h1 className={styles.links}>
                Contacto
            </h1>
        </div>
    </nav>
  )
}

export default Navbar