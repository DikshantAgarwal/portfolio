import React from "react";
import { FiGithub } from "react-icons/Fi";
import { FaLinkedin } from "react-icons/Fa";

export default function Footer() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-14">
      <div className="max-w-6xl mx-auto py-10">
        <div className="bg-white dark:bg-gray-500 h-0.5 mb-10 mx-10"></div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:mx-10">
          <p className="my-4"> &copy; Your Name. All Right Reserved</p>
          <p>Developed By Dikshant Agarwal </p>
          <div className="flex  space-x-4 my-4 sm:my-0">
            <FiGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
