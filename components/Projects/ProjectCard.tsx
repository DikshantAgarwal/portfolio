import React, { FC } from "react";
import Image from "next/image";
export type IProps = {
  link: string;
  title: string;
  id: number;
  imgUrl: string;
};

const ProjectCard = (props: { cardItem: IProps }) => {
  const { link, title, id, imgUrl } = props.cardItem;
  return (
    <a href={link} className="relative mx-auto">
      <div className="overflow-hidden rounded shadow-md">
        <Image
          src={imgUrl}
          alt="img"
          width="500"
          height="500"
          className="hover:scale-125 object-cover ease-out duration-1000 w-full h-full"
        ></Image>
      </div>
      <h1 className="absolute top-1.5 left-5 bg-red-500 rounded p-1">
        {title}
      </h1>
      <div className="absolute bottom-10 left-5">
        <h1 className="  rounded-full bg-red-500 w-8 h-8 relative">
          <span className="absolute left-3 right-3 bottom-1 top-1">{id}</span>
        </h1>
      </div>
    </a>
  );
};

export default ProjectCard;
