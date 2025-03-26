import {motion} from 'framer-motion'

const Home = () => {
    return (
        <div className="font-[Poppins] text-white flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-blue-400 to-emerald-400">
            <motion.h1 className="text-5xl text-center" 
                initial={{opacity: 0, y: -50}} 
                animate={{opacity: 1, y: 0}}
                transition={{duration:1,ease: "easeOut"}}
            >
                Welcome to My Portfolio
            </motion.h1>
            <motion.p
                className="text-white mt-4 text-lg text-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
                I build modern and responsive web applications.
            
            </motion.p>
            <motion.a
                href="/projects"
                className="active:text-[#FFD700] mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            >
                View My Work
            </motion.a>
        </div>
    )
}
export default Home;