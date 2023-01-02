import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { FaChevronDown } from "react-icons/fa";

function About() {
    return (
        <div className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl md:text-4xl font-bold text-center">
                Hey! 👋
            </p>
            <p className="text-base sm:text-xl text-center leading-relaxed mt-4">
                I am a Front End Developer. I love creating interactive User Interfaces.
            </p>

            <ScrollIntoView selector="#tech" className='hover:cursor-pointer'>
                <div className="mx-auto p-20">
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
                </div>
            </ScrollIntoView>
        </div>
    );
}

export default About;
