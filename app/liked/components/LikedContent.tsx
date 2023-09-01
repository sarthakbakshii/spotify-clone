"use client";

import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useAuthModal from "@/hooks/useAuthModal";

interface Props {
  songs: Song[];
}

const LikedContent: React.FC<Props> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const authModal = useAuthModal();

  // if no user return to home

  useEffect( () =>{
  if (!user) {
    authModal.onOpen();
  }
  },[ user])

  useEffect(() => {
    if (!isLoading && !user) {
       router.replace("/");
    }
  }, [ isLoading, router, user]);

  // if no song
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
        {
            songs.map((song) => (
                <div key={song.id} className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem
                          onClick={() =>{}}
                          data={song}
                         />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))
        }
    </div>
  )
};

export default LikedContent;
