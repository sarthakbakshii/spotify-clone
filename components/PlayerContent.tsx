"use client";
import React, { useEffect, useState } from "react";

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
// @ts-ignore
import useSound from "use-sound";


import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

import Slider from "./MusicPlayer/Slider";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

interface Props {
  song: Song;
  songUrl: string;
}
const PlayerContent: React.FC<Props> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    // if no next song is available, play 1st
    if (!nextSong) {
      return player.setId(player.ids[0]);
    }
    player.setId(nextSong);
  };

  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    // if no previous song is available, play last
    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }
    player.setId(previousSong);
  };

  const [play, { pause, sound }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
        setIsPlaying(false);
        onPlayNext();
    },
    onPause : () => setIsPlaying(false),
    format: ['mp3']
  });

  useEffect(() => {
    sound?.play();
    return () =>{
        sound?.unload()
    }
  } ,[sound])

  const handlePlay = () => {
    if(!isPlaying) {
        play()
        setIsPlaying(true)
    }else{
        pause()
        setIsPlaying(false);
    }
  }

  const toggleMute = () => {
    if( volume === 0) {
        setVolume(1);
    }else{
        setVolume(0)
    }
  }

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume ? HiSpeakerWave :  HiSpeakerXMark;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      {/* player controller for mobile */}

      <div className="md:hidden flex col-auto w-full justify-end items-center">
        <div
          onClick={handlePlay}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      {/* Player controller for desktop */}
      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className=" text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={handlePlay}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white cursor-pointer p-1"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className=" text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      {/* volume */}
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            size={34}
            className="cursor-pointer"
          />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
