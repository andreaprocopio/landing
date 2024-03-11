import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-[110px] py-10">
    <motion.div
      className="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center sm:text-left"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "tween",
        delay: 0.1
      }}
    >
        <div className="mr-auto place-self-center lg:col-span-6">

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Web <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Front-end</mark> developer</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Andrea Procopio: A Milan-Based Front-End Maestro with Years of Experience and a Deep Affinity for the Art of Coding, Bringing Your Digital Dreams to Life with Precision and Passion</p>

            <a href="#projects" className="mt-6 block font-medium text-blue-600 dark:text-blue-500 hover:underline">Get to know me</a>
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-6 flex">
        <img
            src="/hero-illustration.png"
            alt="mockup"
        />
        </div>
    </motion.div>
    </section>
  )
}

export default Hero