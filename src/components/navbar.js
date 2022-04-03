import Link from 'next/link'
import { motion } from 'framer-motion'


const Navbar = () => {
  return (
    <motion.nav 
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    className="container flex py-10 w-full mx-auto justify-between"
    >
        <div className="container">
            <h1 className="">
                <Link href="/">
                    <a className="font-mono text-xl">FARdev</a>
                </Link>
            </h1>
        </div>
        <div className="container flex gap-3 justify-end">
            <h1 className="text-mono text-base">
                Sobre mi
            </h1>
            <h1 className="text-mono text-base">
                Contacto
            </h1>
        </div>
    </motion.nav>
  )
}

export default Navbar