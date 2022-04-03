/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Hero.module.css'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="container flex flex-col align-middle mx-auto w-full h-screen my-auto">
            <div className="container flex mt-20">
                <img className="h-25 my-auto" src={"/perfil.png"} alt="foto de perfil"/>
                <div className="flex flex-col gap-y-10 my-auto mx-auto">
                    <h1 className="text-3xl">
                        Hola, mi nombre es Agustin!
                    </h1>
                    <h2 className="font-sans text-4xl">
                        Soy Desarrollador web.
                    </h2>
                    <h3 className="text-2xl">
                    Desarrollador web fullstack, especializandome en Frontend. <br/>Me apasiona resolver problemas y crear las mejores experiencias <br/> de usuario.
                    </h3>
                </div>
            </div>
            <motion.svg 
            initial={{ y: -10 }}
            animate={{ y: 0}}
            transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", ease: "easeInOut"}}
            
            className="mx-auto mt-20" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8062 12.5271L17.5 19.2063L24.1938 12.5271L26.25 14.5833L17.5 23.3333L8.75 14.5833L10.8062 12.5271Z" fill="black"/>
            </motion.svg>
        </motion.div>
    </>
  )
}

export default Hero