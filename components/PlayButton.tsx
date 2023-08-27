import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button
      className="
        transition 
         opacity-0
        rounded-full 
        flex 
        items-center 
        justify-center 
        bg-green-500 
        p-4
        drop-shadow-md 
        translate
        translate-y-1/2
        group-hover:opacity-100 
        group-hover:translate-y-1/4
        hover:scale-110
      "
    >
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
