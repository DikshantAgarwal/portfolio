import React from "react";
import ExperienceDescriptionCard from "./ExperienceDescriptionCard";
import Link from "next/link";
import { myData } from "../../constant/data";

export default function Experience() {
  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center md:text-left md:text-8xl mb-4 font-bold">
          {" "}
          Experience.
        </h1>
      </div>
      <div className="md:-mt-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-xl mx-auto pt-20">
          {myData.experience.map((item,index) => {
            return (
              <>
                <ExperienceDescriptionCard key={item.desc} exp={item} />
                {index !== myData.experience.length-1 ?
                  <div className="flex flex-col items-center justify-center w-auto">
                    <span className="relative h-4 w-4 flex">
                      <span className="w-full h-full absolute rounded-full animate-ping bg-cyan-300 opacity-75 "></span>
                      <span className="rounded-full relative inline-flex h-4 w-4 bg-cyan-300"></span>
                    </span>
                    <div className="w-1 h-20 bg-white"></div>
                  </div> : null
                }
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
