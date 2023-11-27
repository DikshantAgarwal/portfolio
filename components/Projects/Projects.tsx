import React from "react";
import ProjectCard from "./ProjectCard";
import { myData } from "../../constant/data";

export default function Projects() {
  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center md:text-left md:text-8xl mb-4 font-bold">
          {" "}
          Projects.
        </h1>
      </div>
      <div className="md:-mt-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto pt-20 flex md:flex-row flex-1 flex-wrap gap-10">
          {myData.projects.map((item,index) => {
            return (
              <>
                <ProjectCard key={item.id} cardItem={item}/>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
