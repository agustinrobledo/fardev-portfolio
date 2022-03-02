import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import { motion } from 'framer-motion'


const Navbar = () => {
  return (
    <motion.nav 
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    className={styles.container}>
        <div className={styles.homeContainer}>
            <h1 className={styles.home}>
                <Link href="/">
                    <a className={styles.link}>Fernando Agustin Robledo</a>
                </Link>
            </h1>
        </div>
        {/* <div className={styles.linksContainer}>
            <h1 className={styles.links}>
                Sobre mi
            </h1>
            <h1 className={styles.links}>
                Contacto
            </h1>
        </div> */}
    </motion.nav>
  )
}

export default Navbar