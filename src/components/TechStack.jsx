import React from 'react'
import Hr from './Hr'
import TechCard from './TechCard'

const TechStack = () => {
  return (
    <section className='bg-white dark:bg-gray-900 py-10'>
        <div className='max-w-screen-lg mx-auto p-4 text-center  space-y-16'>
            <Hr />

            <div className='space-y-3'>
                <h3 id="skills" className="text-4xl font-bold dark:text-white underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">Tech Stack</h3>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  My expertise encompasses a dynamic array of evolving technologies, ensuring that I stay at the forefront of innovation.
                </p>
            </div>

            <div className='flex gap-3 sm:gap-6 md:gap-10 flex-wrap justify-center items-center mx-auto max-w-xl'>
              <TechCard iconName={"react"} />
              <TechCard iconName={"js"} />
              <TechCard iconName={"html"} />
              <TechCard iconName={"tailwind"} />
              <TechCard iconName={"sass"} />
              <TechCard iconName={"css"} />
              <TechCard iconName={"python"} />
              <TechCard iconName={"docker"} />
            </div>

        </div>
    </section>
  )
}

export default TechStack