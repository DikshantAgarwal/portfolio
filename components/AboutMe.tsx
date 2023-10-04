import React from "react";
import Link from "next/link";
import { myData } from "../constant/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-900 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-8xl"> About Me.</h1>
          <p className="text-2xl md:text-3xl p-2 leading-loose">
            {myData.about.title}
          </p>
          <div className="grid  grid-cols-8">
            <div className="col-start-5 col-span-4">
              {myData.about.description.map((desc: string) => {
                return (
                  <div key={desc} className="mb-4">
                    <p className="leading-loose">{desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="row-start-1 col-end-4 col-span-3">
              <div>
                <h1 className="text-xl">Contact</h1>
              </div>
              <div>
                <h1 className="text-xl">Job opening</h1>
              </div>

              <h1 className="text-xl">Social Links</h1>
              <div className="mt-4">
                {myData.socialLinks.map((socialProfile) => {
                  const socialLinkName = Object.keys(socialProfile)[0];
                  const socialLink = socialProfile[socialLinkName];
                  return (
                    <div className="ml-4">
                      <Link href={socialLink} className="flex group">
                        <span className="m-3">&rarr;</span>
                        <div className="relative overflow-hidden m-3">
                          <div className="absolute h-0.5 bg-gray-400 transform w-full bottom-0 -translate-x-28 transition duration-200 group-hover:translate-x-0"></div>
                          {socialLinkName}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
