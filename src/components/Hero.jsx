import React from 'react'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-[80px]">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center sm:text-left">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Andrea Procopio
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Hi, I am Andrea! 25 year old front-end web developer from Milan, Italy.
            </p>
            <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
                Get to know me
            </a>
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-5 flex">
        <img
            src="/hero-image.png"
            alt="mockup"
        />
        </div>
    </div>
    </section>
  )
}

export default Hero