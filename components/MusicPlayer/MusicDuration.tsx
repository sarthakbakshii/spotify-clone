"use client";
import React, { useEffect, useRef, useState } from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import { convertMsToTime } from "@/utils/timeConvertor";

interface Props {
  isPlaying: boolean;
  duration: any;
}

const MusicDuration: React.FC<Props> = ({
  duration,
  isPlaying,
}) => {
  const durationTime = convertMsToTime(duration);
  const [MusicCounter, setMusicCounter] = useState({ min: 0, sec: 0, ms: 0 });
  const timmerRef = useRef<NodeJS.Timeout | null>(null);
  console.log(MusicCounter.ms, duration);

  const timer = () => {
    if (isPlaying) {
            timmerRef.current = setInterval(() => {
              setMusicCounter((t) => {
                if (t.sec == 59) {
                  return { ...t, min: t.min + 1, sec: 0, ms: t.ms + 1000 };
                }
                return { ...t, sec: t.sec + 1, ms: t.ms + 1000 };
              });
            }, 1000);
    } else {
        //@ts-ignore
        clearInterval(timmerRef.current);
    }

  };

  useEffect(() => {
    timer();
    return () => {
      //@ts-ignore
      clearInterval(timmerRef.current);
    };
  }, [isPlaying]);


  return (
    <div className="flex justify-center items-center gap-x-2 ">
      <span className="text-neutral-500 w-8 text-sm hidden md:flex">
        {MusicCounter.min}:{MusicCounter.sec}
      </span>
      <RadixSlider.Root
        className="relative flex items-center select-none touch-none w-full h-10"
        defaultValue={[0]}
        value={[MusicCounter.ms]}
        max={Number(duration)}
        step={1}
        aria-label="duration"
      >
        <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
          <RadixSlider.Range className="absolute bg-white rounded-full h-full" />
        </RadixSlider.Track>
        {/* <RadixSlider.Thumb /> */}
      </RadixSlider.Root>
      <span className="text-neutral-500 w-8 text-sm hidden md:flex">
        {durationTime.min}:{durationTime.sec}
      </span>
    </div>
  );
};

export default MusicDuration;
