import React from "react";
import Link from "next/link";
import { myData } from "../constant/data";

export default function AboutMe() {
  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl text-center md:text-left md:text-8xl mb-4 font-bold">
          {" "}
          About Me.
        </h1>
      </div>
      <div className=" md:-mt-14 bg-gray-100  dark:bg-gray-900 mx-auto">
        <div className="md:pt-20 max-w-6xl mx-auto px-4 pb-8">
          <p className="text-2xl md:text-3xl p-2  font-semibold text-justify">
            {myData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-gray-100  dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid  md:grid-cols-8 grid-rows-1">
          <div className="col-span-1 md:col-start-5 md:col-span-4 ml-4">
            {myData.about.description.map((desc: string) => {
              return (
                <div key={desc} className="mb-4">
                  <p className="leading-loose">{desc}</p>
                </div>
              );
            })}
          </div>

          <div className="row-start-1 col-end-4 col-span-3 md:pb-0 pb-4">
            <h1 className="ml-4 text-xl font-semibold">Social Links</h1>
            <div className="mt-4">
              {myData.socialLinks.map((socialProfile) => {
                const socialLinkName = Object.keys(socialProfile)[0];
                const socialLink = socialProfile[socialLinkName];
                return (
                  <div className="ml-4" key={socialLink}>
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
    </section>
  );
}
