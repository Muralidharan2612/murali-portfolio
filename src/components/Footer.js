import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                    href='https://github.com/Muralidharan2612'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaGithub />
                    <span className="sr-only">
                        Github
                    </span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-900 hover:bg-blue-900 rounded-full hover:text-white transition-colors duration-300"
                    href='https://www.linkedin.com/in/muralidharanvenkatesan/'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaLinkedin />
                    <span className="sr-only">
                        Linkedin
                    </span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300"
                    href='mailto:mdh26121999@gmail.com'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaEnvelope />
                    <span className="sr-only">
                        EMail
                    </span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                    href='https://twitter.com/imuralioffl'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaTwitter />
                    <span className="sr-only">
                        Twitter
                    </span>
                </a>
            </div>

            <div className="flex justify-center mt-4">
                <p className='mb-4'>
                    Made with <span className="mr-2" role="link" aria-label='heart'>❤️</span>by <a className="text-blue-500 hover:underline" href="mdh26121999@gmail.com">Muralidharan</a>
                </p>
            </div>

        </div>
    )
}

export default Footer;
