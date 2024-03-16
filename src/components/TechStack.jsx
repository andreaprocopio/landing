import React from 'react'
import Hr from './Hr'
import TechCard from './TechCard'
import { motion } from 'framer-motion'

const TechStack = () => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className='bg-white dark:bg-gray-900 py-10' id="skills">
        <motion.div
          className='max-w-screen-lg mx-auto p-4 text-center  space-y-16'
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            delay: 0.3
          }}
        >
            <Hr />

            <div className='space-y-3'>
                <h3 className="text-4xl font-bold dark:text-white underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">Tech Stack</h3>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  My expertise encompasses a dynamic array of evolving technologies, ensuring that I stay at the forefront of innovation.
                </p>
            </div>

            <motion.div
              className='flex gap-3 sm:gap-6 md:gap-10 flex-wrap justify-center items-center mx-auto max-w-xl'
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              <TechCard iconName={"react"} />
              <TechCard iconName={"js"} />
              <TechCard iconName={"html"} />
              <TechCard iconName={"tailwind"} />
              <TechCard iconName={"sass"} />
              <TechCard iconName={"css"} />
              <TechCard iconName={"python"} />
              <TechCard iconName={"docker"} />
            </motion.div>

        </motion.div>
    </section>
  )
}

export default TechStack