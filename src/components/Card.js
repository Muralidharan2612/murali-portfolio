import React from 'react';
import profile from '../images/main-image.png';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Card() {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-md mx-auto shadow-xl rounded-xl p-5'>
                <div className="">
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt='profile face' />
                </div>

                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl">
                        Muralidharan Venkatesan
                    </p>

                    <p className="text-xs sm:text-base pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Front End Developer
                    </p>

                    <div className="flex align-center justify-center mt-4">
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
                </div>
            </div>
        </div>
    );
}

export default Card;
