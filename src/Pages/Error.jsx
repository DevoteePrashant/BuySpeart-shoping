
import React from 'react';
import { useState } from "react";
import { Link } from "react-router";
// import Profile from '../pages/Profile';

const Error = () => {
return (
    <>
<main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                
                    <p className="text-gray-800 text-4xl font-semibold sm:text-6xl">
                        Page not found
                    </p>
                    <p className="text-gray-600">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a href="./Home.jsx" className="block py-2 px-4 text-white font-medium bg-blue-600 duration-150 rounded-lg">
                            Go back
                        </a>
                        <a href="./Home.jsx" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Contact support
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </>
);
};


export default Error;



