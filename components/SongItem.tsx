"use client";
import React from "react";

import { Song } from "@/types";
import useLoadImage from "@/hooks/useLoadingImages";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface Props {
  data: Song;
  onClick: (id: string) => void;
}
const SongItem: React.FC<Props> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/100 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image 
          className="object-cover"
          src={ imagePath || './images/liked.png'}
          fill
          alt="Images" 
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4  gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm w-full truncate">{data.author}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
