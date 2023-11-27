
import React from "react";
import Link from 'next/link';
import {BsArrowUpRightSquare} from 'react-icons/Bs';
import {getLatestRepos} from '@/lib/getLatestRepos';

export default async function LatestCode() {
  const token= process.env.GITHUB_TOKEN;
  const latestRepos = await getLatestRepos(token);

  return (
    <section className="bg-gray-100  -mt-44 dark:bg-gray-900 mx-auto pb-40">
      <div className="max-w-6xl mx-auto">
      <header className="flex flex-col justify-between items-center md:flex-row pt-40 mx-20 my-10 md:my-20">
        <h1 className="text-6xl md:text-9xl sm:text-white text-gray-500 text-center font-bold max-w-lg dark:text-gray-800">Latest Code</h1>
        <Link href="https://github.com/DikshantAgarwal" className="bg-white font-semibold text-black rounded-md px-10 py-5 mt-10 sm:mt-0 flex justify-center  items-center gap-2 ">  
         <BsArrowUpRightSquare size={15}/>
          <p>View Github</p>
        </Link> 
      </header>
    
      
      <div className="grid grid-col-1 my-20 sm:grid-cols-2 lg:grid-cols-3 mx-20 md:-mt-32 gap-8">
        {
          latestRepos && latestRepos.map((repo:{id:number,name:string, clone_url:string,description:string})=>{
            return(
              <div key ={repo.id}className="p-4 rounded-lg  mb-4">
                  <h1 className="font-semibold dark:text-white text">{repo.name}</h1>
                  <p className="mt-2 text-base dark:text-white text-ellipsis overflow-hidden whitespace-nowrap mb-2 max-w-xs">{repo.description}</p>
                  <Link href={repo.clone_url} className="font-semibold">View Repository &rarr;</Link>
              </div>
            )
          })
        }
      </div>
      </div>
    </section>
  );
}
