import React from 'react'
import Hr from './Hr'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Contact = ({showAlert}) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        // Get the values from the input refs
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        // Simple validation
        if (!email || !subject || !message) {
            // If any of the fields are empty, don't proceed
            alert("Please fill in all fields.");
            return;
        }

        // If all fields are filled, proceed with the form submission
        // Reset the input fields
        emailRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";

        // Show alert or submit form
        showAlert();
    }


    const emailRef = useRef(null)
    const subjectRef = useRef(null)
    const messageRef = useRef(null)
    return (
        <section className="bg-white dark:bg-gray-900 py-10" id="contact">
            <motion.div
                className='max-w-screen-lg mx-auto p-4 text-center space-y-16'
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "tween",
                  delay: 0.3
                }}
            >
                <Hr />
                <div className="mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Me
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Want to get in touch? Please complete the form below, and I'll reach out to you promptly.
                    </p>
                    <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                        Your email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="your@email.com"
                        required=""
                        ref={emailRef}
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                        Subject
                        </label>
                        <input
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let me know how I can help you"
                        required=""
                        ref={subjectRef}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                        Your message
                        </label>
                        <textarea
                        id="message"
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                        defaultValue={""}
                        ref={messageRef}
                        />
                    </div>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                        scale: 0.8,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500
                    }}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                    Send message
                    </motion.button>
                    </form>
                </div>
            </motion.div>
        </section>

    )
}

export default Contact