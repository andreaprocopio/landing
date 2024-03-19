import React from 'react'
import { motion } from 'framer-motion'

const TechCard = ({ iconName }) => {

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div variants={item} className="border inline-flex flex-col relative rounded-xl dark:bg-gray-900
                    dark:border-white/15 before:rounded-[11px] before:absolute
                    before:inset-0 before:border-t before:border-white
                    dark:before:border-white/20 before:bg-gradient-to-b
                    dark:before:from-white/10 dark:before:to-transparent before:shadow
                    dark:before:shadow-gray-950 shrink-0 justify-center items-center py-4
                    gap-2 w-24">
        <img src={`/icons/${iconName}.png`} alt={`${iconName}`} className='w-10 h-auto'/>
        <p className='text-sm font-normal text-gray-500 lg:text-base dark:text-gray-400'>{iconName}</p>
    </motion.div>
  )
}

export default TechCard