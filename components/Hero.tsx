import React from "react";
import Highlight from "./Highlight";
import { RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";
import profileImage from "../public/avatar.png";
import {BsArrow90DegUp} from 'react-icons/Bs'
export default function Hero() {
  return (
    <div className="w-full flex justify-between p-8 dark:bg-slate-800">
      <div className="flex flex-col sm:text-left text-center">
        <RoughNotationGroup show={true}>
          <Highlight color="red">
            <h1 className="text-5xl sm:text-8xl mb-4   font-semibold text-gray-800 dark:text-gray-200" >Developer.</h1>
          </Highlight>
          <Highlight color="yellow">
            <h1 className="text-5xl sm:text-8xl mb-4  font-semibold text-gray-800 dark:text-gray-200">Programmer.</h1>
          </Highlight>
          <Highlight color="lightgreen">
            <h1 className="text-5xl sm:text-8xl mb-4  font-semibold text-gray-800 dark:text-gray-200">Desginer.</h1>
          </Highlight>
        </RoughNotationGroup>
      </div>

      <div className="hidden lg:inline-block">
        <Image
        className="rounded-md"
          src={profileImage}
          alt="portfolio image"
          width={500}
          height={500}
          priority
        />
        <div className="flex flex-row  space-x-4 mt-4">
        <BsArrow90DegUp size={20}/>
        <p className="font-mono">Thats me</p>
        </div>
        
      </div>
    </div>
  );
}
