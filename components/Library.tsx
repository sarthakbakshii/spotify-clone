import React from "react";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import useOnPlay from "@/hooks/useOnPlay";

import { Song } from "@/types";

import MediaItem from "./MediaItem";

interface Props {
  songs: Song[];
}
const Library: React.FC<Props> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onPlay = useOnPlay(songs);

  const onClickHandler = () => {
    //handle upload later first check for logedin user
    if (!user) {
      return authModal.onOpen();
    }

    // check for subscription

    // handle upload music modal
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md"> Your Library </p>
        </div>
        <AiOutlinePlus
          onClick={onClickHandler}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => {
          return (
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
