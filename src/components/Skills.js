import React from 'react';
import { SiReactrouter, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss } from "react-icons/si";
import { FaReact, } from "react-icons/fa";

function Skills() {
    return (
        <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
            <p className="text-2xl underline underline-offset-8 text-center sm:text-4xl pt-4 font-bold">
                Skills
            </p>

            <div className="flex flex-wrap justify-center pt-2">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript color='#f0db4f' className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                        Javascript
                    </p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden  shadow-2xl rounded-xl sm:w-52">
                    <FaReact color='#61DBFB' className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                        React
                    </p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                    <SiTypescript color='#007acc' className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                        Typescript
                    </p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                    <SiReactrouter color='#d4173b' className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                        React Router
                    </p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden  shadow-2xl rounded-xl sm:w-52">
                    <SiHtml5 color='#F06529' className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                        Html5
                    </p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                    <SiCss3 color='#264de4' className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                        Css3
                    </p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                    <SiBootstrap color='#0275d8' className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
                        Bootstrap
                    </p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss color='#00C0A3' className="mx-auto text-4xl" />
                    <p className="mt-6 text-base sm:text-xl font-semibold text-center">
                        Tailwindcss
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
