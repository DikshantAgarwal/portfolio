"use client";

import React,{useState,useEffect} from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsSunFill } from "react-icons/Bs";
export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isMount ,setIsMount] = useState<boolean>(false);

  useEffect(()=>{
    setIsMount(true)
  },[])

  if(!isMount){
    return null
  }
  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <BsSunFill className="text-yellow-400" size={15} />
      ) : (
        <BsFillMoonFill className="text-yellow-400" size={15} />
      )}
    </div>
  );
};
