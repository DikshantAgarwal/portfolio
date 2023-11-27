"use client"
import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/Fi";
import { FaLinkedin } from "react-icons/Fa";
import { ThemeButton } from "@/components/ThemeButton";
import { myData } from "../constant/data";
import { usePathname } from 'next/navigation';
import {BsArrowDownShort} from 'react-icons/Bs';

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="dark:bg-gray-800">
      <div className="flex flex-row mx-auto max-w-6xl justify-between items-start py-10 px-5 sm:py-20 sm:px-10 flex-wrap">
        <div>
          <h2 className="text-xl font-semibold">
            <Link href="/">Dikshant Agarwal</Link>
          </h2>
          <span className="text-gray-600">Front-End Developer</span>
        </div>
        <div className="flex space-x-8 order-last mt-4 sm:order-none sm:mt-0">
          {myData.pages.map((page: string) => {
            return (
              <Link
                className={`capitalize flex relative after:absolute after:bg-gray-800  dark:after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-200 ${pathname===`/${page}` ? 'font-bold' :''}`}
                href={`/${page}`}
                key={page}
              >
                {page}
                {pathname===`/${page}` && 
                  <BsArrowDownShort size={25}/>}
              </Link>
            );
          })}
        </div>

        <div className="flex  space-x-4 mt-4 sm:mt-0 cursor-pointer">
          <FiGithub />
          <FaLinkedin />
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}
