import useLoadImage from "@/hooks/useLoadingImages";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  onClick?: (id: string) => void;
  data: Song;
}
const MediaItem: React.FC<Props> = ({ onClick, data }) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    // default turn on player
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt="Media Item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate capitalize">{data.title}</p>
        <p className="text-sm text-neutral-400 truncate capitalize">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
