import React from 'react'
import Hr from './Hr'
import { FaLocationArrow } from "react-icons/fa";
import ProjectCard from './ProjectCard';


const ProjectsGrid = () => {
  return (
    <section className='bg-white dark:bg-gray-900 py-10'>
        <div className='max-w-screen-lg mx-auto p-4 text-center space-y-16'>
            <Hr />

            <div className='space-y-3'>
                <h3 id="projects" className="text-4xl font-bold dark:text-white underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">Projects</h3>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    Exploring Recent Projects: Dive into My Latest Front-End Developments.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                <ProjectCard technology={"React.js"} name={"Click for Weather"} imgSrc={"/click-for-weather.png"} bgCol={"bg-orange-500"} link={"https://click-for-weather.netlify.app/"}/>
                <ProjectCard technology={"Next.js"} name={"Info Stream"} imgSrc={"/info-stream.png"} bgCol={"bg-teal-500"} link={"https://info-stream.vercel.app/"} />
            </div>
        </div>
    </section>
  )
}

export default ProjectsGrid