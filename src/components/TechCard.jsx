import React from 'react'



const TechCard = ({ iconName }) => {
  return (
    <div className="border inline-flex relative *:relative *:size-10
                    *:m-auto size-20  rounded-xl dark:bg-gray-900
                    dark:border-white/15 before:rounded-[11px] before:absolute
                    before:inset-0 before:border-t before:border-white before:from-gray-100
                    dark:before:border-white/20 before:bg-gradient-to-b
                    dark:before:from-white/10 dark:before:to-transparent before:shadow
                    dark:before:shadow-gray-950 shrink-0">
        <img src={`/icons/${iconName}.png`} alt={`${iconName}`} />
    </div>
  )
}

export default TechCard