import React from "react";
import Link from 'next/link';
import {BsArrowUpRightSquare} from 'react-icons/Bs';

export default function MainProjects() {
  return (
    <div className="bg-gray-100  -mt-44 dark:bg-gray-900 mx-auto">
      <div className="max-w-6xl mx-auto">
      <header className="flex flex-col justify-between items-center sm:flex-row pt-40 mx-20 my-10 sm:my-20">
        <h1 className="text-6xl md:text-9xl sm:text-white text-gray-500 text-center font-bol max-w-lg dark:text-gray-400">Favourite Projects</h1>
        <Link href="" className="bg-white font-semibold text-black rounded-md px-10 py-5 mt-10 sm:mt-0 flex justify-center  items-center gap-2  ">
          
         <BsArrowUpRightSquare size={15}/>
          <p>View All</p>
        </Link> 
      </header>
    

      <div className="grid sm:grid-cols-3 mx-20 -mt-32">
           <div className="bg-red-300 p-4 rounded-lg h-96 col-span-full"></div>
           <div className="bg-yellow-200 h-96 sm:cols-start-1 sm:col-span-2 sm:mt-0 mt-4"></div>
           <div className="bg-green-300 h-96 sm:cols-start-3  sm:col-end-4 sm:mt-0 mt-4"></div>
      </div>
      </div>
    </div>

  );
}
