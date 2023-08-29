"use client";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import React from "react";

interface Props {
  songs: Song[];
}
const SearchContent: React.FC<Props> = ({ songs }) => {
  console.log("search content", songs);
  
  if (songs.length == 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found.
      </div>
    );
  }
  console.log(songs);
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => {
        return (
          <div key={song.id} className="flex items-center gap-x-4 w-full">
            <div className="flex-1">
              <MediaItem onClick={() => {}} data={song} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchContent;
